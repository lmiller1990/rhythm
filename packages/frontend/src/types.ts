import {
  ParsedHoldNoteChart,
  ParsedTapNoteChart,
} from "@packages/chart-parser";
import type { BaseSong, Difficulty } from "@packages/types/src";

export interface Song extends BaseSong {
  order: number;
  banner: string;
}

export interface Chart {
  difficulty: Difficulty | string;
  level: number;
  parsedTapNoteChart: ParsedTapNoteChart;
  parsedHoldNoteChart: ParsedHoldNoteChart;
}

export interface SongDifficulty {
  name: string;
  level: number;
}
