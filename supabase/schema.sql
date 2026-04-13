-- Vernacular Database Schema
-- Run this in your Supabase SQL Editor (Dashboard > SQL Editor > New Query)
-- Supports all 16 languages with per-language tracking

-- Enable UUID generation
create extension if not exists "uuid-ossp";

-- ============================================================
-- CORE USER TABLES
-- ============================================================

-- User profiles (extends Supabase Auth)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  display_name text,
  email text,
  active_language text not null default 'yoruba',
  proficiency_level text default 'none' check (proficiency_level in ('none', 'beginner', 'intermediate', 'heritage')),
  subscription_tier text default 'free' check (subscription_tier in ('free', 'learner', 'explorer')),
  streak_count integer default 0,
  streak_last_date date,
  total_conversation_minutes integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.profiles enable row level security;
create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles for insert with check (auth.uid() = id);

-- ============================================================
-- PROGRESS TRACKING (per language)
-- ============================================================

-- Lesson progress
create table public.lesson_progress (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  language text not null,
  lesson_id text not null,
  status text default 'not_started' check (status in ('not_started', 'in_progress', 'completed')),
  score integer,
  time_spent_seconds integer default 0,
  started_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz default now()
);

alter table public.lesson_progress enable row level security;
create policy "Users can manage own lesson progress" on public.lesson_progress for all using (auth.uid() = user_id);
create unique index idx_lesson_progress_unique on public.lesson_progress(user_id, language, lesson_id);

-- Vocabulary mastery (per word, per user, per language)
create table public.vocabulary_mastery (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  language text not null,
  word_native text not null,
  word_english text not null,
  lesson_id text,
  times_seen integer default 0,
  times_correct integer default 0,
  times_incorrect integer default 0,
  confidence_score numeric(3,2) default 0.00,
  last_practiced_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.vocabulary_mastery enable row level security;
create policy "Users can manage own vocabulary" on public.vocabulary_mastery for all using (auth.uid() = user_id);
create unique index idx_vocab_mastery_unique on public.vocabulary_mastery(user_id, language, word_native);

-- Proverb progress
create table public.proverb_progress (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  language text not null,
  proverb_id text not null,
  seen_count integer default 0,
  can_recall boolean default false,
  can_use_in_context boolean default false,
  last_seen_at timestamptz,
  created_at timestamptz default now()
);

alter table public.proverb_progress enable row level security;
create policy "Users can manage own proverb progress" on public.proverb_progress for all using (auth.uid() = user_id);
create unique index idx_proverb_progress_unique on public.proverb_progress(user_id, language, proverb_id);

-- ============================================================
-- LEARNER MEMORY SYSTEM (AI tutor memory, per language)
-- ============================================================

-- Conversation summaries
create table public.conversation_summaries (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  language text not null,
  scenario_id text,
  scenario_title text,
  duration_seconds integer,
  message_count integer,
  messages jsonb default '[]',
  summary text not null,
  topics_covered text[] default '{}',
  vocabulary_used text[] default '{}',
  proverbs_referenced text[] default '{}',
  overall_score integer check (overall_score between 1 and 5),
  strengths text[] default '{}',
  weaknesses text[] default '{}',
  created_at timestamptz default now()
);

alter table public.conversation_summaries enable row level security;
create policy "Users can manage own conversations" on public.conversation_summaries for all using (auth.uid() = user_id);
create index idx_conv_summaries_user on public.conversation_summaries(user_id, language, created_at desc);

-- Mistake patterns
create table public.mistake_patterns (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  language text not null,
  category text not null check (category in (
    'tone', 'vocabulary', 'grammar', 'pronunciation', 'cultural', 'script'
  )),
  description text not null,
  specific_words text[] default '{}',
  occurrence_count integer default 1,
  last_occurred_at timestamptz default now(),
  resolved boolean default false,
  resolved_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.mistake_patterns enable row level security;
create policy "Users can manage own mistakes" on public.mistake_patterns for all using (auth.uid() = user_id);
create index idx_mistake_patterns_user on public.mistake_patterns(user_id, language, resolved, occurrence_count desc);

-- Learner memory: distilled observations the AI tutor uses
create table public.learner_memory (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  language text not null,
  memory_type text not null check (memory_type in (
    'strength', 'weakness', 'preference', 'connection', 'milestone', 'cultural_note'
  )),
  content text not null,
  confidence numeric(3,2) default 0.50,
  source_conversation_id uuid references public.conversation_summaries(id),
  source_lesson_id text,
  times_referenced integer default 0,
  last_referenced_at timestamptz,
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.learner_memory enable row level security;
create policy "Users can manage own memory" on public.learner_memory for all using (auth.uid() = user_id);
create index idx_learner_memory_active on public.learner_memory(user_id, language, is_active, memory_type);

-- ============================================================
-- SUBSCRIPTIONS
-- ============================================================

create table public.subscriptions (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  stripe_customer_id text,
  stripe_subscription_id text,
  tier text default 'free' check (tier in ('free', 'learner', 'explorer')),
  status text default 'active' check (status in ('active', 'past_due', 'canceled', 'trialing')),
  current_period_start timestamptz,
  current_period_end timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.subscriptions enable row level security;
create policy "Users can view own subscription" on public.subscriptions for select using (auth.uid() = user_id);

-- ============================================================
-- HELPER FUNCTIONS & TRIGGERS
-- ============================================================

-- Auto-update updated_at timestamp
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger on_profiles_updated before update on public.profiles
  for each row execute function public.handle_updated_at();
create trigger on_vocab_updated before update on public.vocabulary_mastery
  for each row execute function public.handle_updated_at();
create trigger on_mistakes_updated before update on public.mistake_patterns
  for each row execute function public.handle_updated_at();
create trigger on_memory_updated before update on public.learner_memory
  for each row execute function public.handle_updated_at();
create trigger on_subscriptions_updated before update on public.subscriptions
  for each row execute function public.handle_updated_at();

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, display_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'display_name', 'Learner'));
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();
