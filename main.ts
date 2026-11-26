// makefun-x-reposts-02: copy POSTS.json from the repo root to /output.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import { cwd, exit, env } from 'process';

const botDir = env.MAKEFUN_BOT_DIR || '/bot';
const outputDir = env.MAKEFUN_OUTPUT_DIR || '/output';

const sourcePath = join(cwd(), 'POSTS.json');
const outputPath = join(outputDir, 'POSTS.json');

try {
  // Create output directory if it doesn't exist
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  // Read source file
  const sourceContent = readFileSync(sourcePath, 'utf8');

  // Parse JSON
  let parsed;
  try {
    parsed = JSON.parse(sourceContent);
  } catch (parseError) {
    console.error('Failed to parse POSTS.json as JSON:', parseError);
    exit(1);
  }

  // Validate structure
  if (!parsed || typeof parsed !== 'object' || !Array.isArray(parsed.posts)) {
    console.error('POSTS.json does not contain a "posts" array');
    exit(1);
  }

  // Write to output
  writeFileSync(outputPath, JSON.stringify(parsed, null, 2), 'utf8');
  console.log(`Successfully copied POSTS.json to ${outputPath}`);
} catch (error) {
  console.error('Error:', error);
  exit(1);
}