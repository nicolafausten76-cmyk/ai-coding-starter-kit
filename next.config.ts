import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Agent rules live in CLAUDE.md and .claude/rules, so next dev must not generate AGENTS.md.
  agentRules: false,
};

export default nextConfig;
