'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type ThresholdFilterProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
};

export function ThresholdFilter({ value, onChange, min = 0, max = 100000, step = 1000 }: ThresholdFilterProps) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor="threshold" className="text-xs text-muted-foreground">
        Sales Threshold
      </Label>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">$</span>
        <Input
          id="threshold"
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => {
            const v = Number(e.target.value);
            onChange(isNaN(v) ? 0 : v);
          }}
          className="h-8 w-32 text-sm"
        />
      </div>
    </div>
  );
}
