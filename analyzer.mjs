export function analyze(source) {
  const lines = source.split(/\r?\n/);
  const findings = [];
  const add = (line, severity, message) => findings.push({ line, severity, message });
  lines.forEach((line, index) => {
    const n = index + 1;
    if (/\s+$/.test(line) && line.trim()) add(n, 'style', 'Trailing whitespace');
    if (/^\t+/.test(line)) add(n, 'style', 'Tab indentation (prefer spaces)');
    if (line.length > 88) add(n, 'style', 'Line exceeds 88 characters');
    if (/\b(?:eval|exec)\s*\(/.test(line) && !/^\s*#/.test(line)) add(n, 'warning', 'Review dynamic code execution');
    if (/^\s*except\s*:/.test(line)) add(n, 'warning', 'Bare except catches unexpected exceptions');
    if (/^\s*def\s+\w+\s*\([^)]*=\s*(?:\[\]|\{\})/.test(line)) add(n, 'warning', 'Mutable default argument');
    if (/\b(?:TODO|FIXME)\b/.test(line)) add(n, 'info', 'Unfinished work marker');
  });
  return { lineCount: lines.length, findings };
}
