export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  tags: string[];
  draft: boolean;
  date: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Why I built Arena — and what real-time actually taught me",
    slug: "why-i-built-arena",
    excerpt:
      "Building a multiplayer game hub forced me to understand real-time communication in a way no tutorial ever could.",
    date: "Jun 2025",
    tags: ["building", "websockets", "lessons"],
    draft: false,
    body: `I started Arena because I wanted to understand WebSockets properly. Not the "here's how socket.io works" tutorial version — the version where things break in production and you have to figure out why.

The idea was simple: a hub where friends could jump into the same room and play games together in real time. TicTacToe, Wordle Duel, Hangman, Connect Four. Small games. The challenge was never the game logic — it was keeping five people in sync with zero lag and no cheating.

## What I learned about rooms

The first thing that broke was room management. I had a naive approach: one Socket.io room per game session, disconnect = leave room. That worked fine in testing with two tabs open.

In real use, people close their laptop mid-game. Their socket disconnects, but should the game end? What if they come back in 30 seconds? I had to build a reconnection grace period — hold the game state for 60 seconds after a disconnect, then clean up if they don't return.

That forced me to think about state as something that lives on the server, not in the browser. The client is just a view.

## Turn validation belongs on the server

The second lesson: never trust the client to enforce game rules.

My first version of TicTacToe sent a "move made" event from the client and the server just broadcast it to everyone. A user could fire that event out of turn, or send impossible board states. I moved all validation server-side — the server checks if it's your turn, checks the move is valid, then emits the new state to everyone.

This felt slower to build but it's the only correct way. Any game where the client controls the rules is a game that can be cheated.

## It's still not done

Arena is the project I come back to most. The matchmaking is rough, the mobile experience needs work, and I want to add more games. But shipping something imperfect taught me more than waiting until it was perfect would have.`,
  },
  {
    title: "Teaching React while still learning it myself",
    slug: "teaching-react-at-sqi",
    excerpt:
      "I got posted to SQI College of ICT for NYSC and found myself in front of a class of React beginners. I was six months ahead of them at best.",
    date: "May 2025",
    tags: ["life", "teaching", "nysc"],
    draft: false,
    body: `When my NYSC posting came through and it said SQI College of ICT — React Instructor — I felt two things at the same time: excited, and quietly terrified.

I had been writing React for about a year. Enough to build real things, not enough to feel like an expert. And now I was supposed to teach it.

## The first class

I walked in with a lesson plan I'd spent a week writing. Components, JSX, props, state — the usual order. I had slides, code examples, everything.

Twenty minutes in, a student raised her hand and asked: "Why can't we just use HTML for everything?"

I had a technically correct answer. But I realised I didn't have a *useful* answer. I had memorised the justification without truly internalising it. That moment made me a better developer more than any tutorial I've watched.

## What I found out about teaching

You cannot fake understanding in front of a class. Students ask questions from angles you haven't considered. "What happens if two components need the same state?" is a question that leads directly to context, then to global state, then to all the problems that come with that — and the student asking it has no idea they're pulling that thread.

I started preparing for class differently after that. Instead of planning what I would say, I would try to break my own code first. Find the edge cases. Ask "but why?" until I ran out of answers.

## Six months later

My students built and deployed their own React apps for their capstone projects. Imperfect ones, with real bugs and real features. I am genuinely proud of them.

I'm still not done learning React. I don't think you ever are. But teaching it showed me how much I actually knew, and exactly where the gaps were.`,
  },
  {
    title: "I'm switching from MongoDB to PostgreSQL — here's why",
    slug: "switching-to-postgres",
    excerpt:
      "Every project I've built has used MongoDB. I'm changing that, and the reason is mostly about what I want to learn next.",
    date: "Jun 2025",
    tags: ["learning", "postgres", "databases"],
    draft: false,
    body: `MongoDB has been good to me. Every project in my portfolio uses it. I know how to model data in it, how to query it, how to index it well enough. It's comfortable.

That's the problem.

I've been reading about SQL for a while and I keep running into the same pattern: people who switched from document databases to relational ones say the same thing — "I wish I'd learned this earlier." Not because MongoDB is bad, but because SQL makes you think differently about your data.

## What I mean by "think differently"

In MongoDB, if I have posts with tags, I just put an array of strings in the post document. Done. It works.

In PostgreSQL, I have to decide: is this a text array column, or a separate tags table with a join? That decision has real consequences for how I can query, how I can filter, how I can add tag metadata later.

SQL forces you to think about relationships before you write a single line of application code. It's more work upfront. But I suspect it prevents a category of problems I've been papering over with flexible schemas.

## The plan

I'm building the blog section of this portfolio on PostgreSQL using Supabase. It's a real Postgres database — not a wrapper — and it means I'll be writing actual SQL from day one.

The schema I'm starting with is simple:

- A posts table with title, slug, body (markdown), tags, and a draft flag
- Row-level security so only published posts are publicly readable
- Timestamps for ordering

I'll write about what I learn as I go. If you're on a similar journey from MongoDB to SQL, follow along — I'll try to be honest about what was harder than I expected.`,
  },
];
