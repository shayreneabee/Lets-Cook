from __future__ import annotations

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
REPORT_PATH = ROOT / "images" / "missing-image-report.json"


def slots(folder: str, prefix: str, count: int) -> list[str]:
    return [f"images/{folder}/{prefix}-{index:02d}.jpg" for index in range(1, count + 1)]


EXPECTED = [
    *slots("hero", "hero", 20),
    *slots("community", "community", 50),
    *slots("skills", "knife-skills", 25),
    *slots("skills", "measuring", 25),
    *slots("skills", "baking", 25),
    *slots("skills", "sauce-prep", 25),
    *slots("skills", "grilling", 25),
    *slots("skills", "plating", 25),
    *slots("cuisines/southern", "southern", 25),
    *slots("cuisines/mexican", "mexican", 25),
    *slots("cuisines/italian", "italian", 25),
    *slots("cuisines/indian", "indian", 25),
    *slots("cuisines/asian", "asian", 25),
    *slots("cuisines/mediterranean", "mediterranean", 25),
]


def main() -> None:
    missing = [slot for slot in EXPECTED if not (ROOT / slot).exists()]
    present = [slot for slot in EXPECTED if (ROOT / slot).exists()]
    report = {
        "expected_count": len(EXPECTED),
        "present_count": len(present),
        "missing_count": len(missing),
        "missing": missing,
    }
    REPORT_PATH.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {REPORT_PATH}")
    print(f"Missing {len(missing)} of {len(EXPECTED)} expected image slots.")


if __name__ == "__main__":
    main()
