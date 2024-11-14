"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity/lib/sanity.config";

export const dynamic = "force-static";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
