import re

path = r'C:\Users\Utente\Documents\Claude\Projects\Esame di maturità\educazione-civica\index.html'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix numeric entities
content = content.replace('&#9887;','⚓')
content = content.replace('&#128220;','📜')
content = content.replace('&#127908;','🎤')
content = content.replace('&#8594;','→')
content = content.replace('&amp;middot;','·')

# Fix double-encoded UTF-8 (e.g. Ã¨ -> è)
fixes = {
    'Ã¨': 'è', 'Ã©': 'é', 'Ã¬': 'ì', 'Ã²': 'ò', 'Ã¹': 'ù',
    'Ã€': 'À', 'Ãˆ': 'È', 'ÃŒ': 'Ì', 'Ã’': 'Ò', 'Ã™': 'Ù',
    'Ã ': ''
}
for k, v in fixes.items():
    content = content.replace(k, v)

with open(path, 'w', encoding='utf-8') as f:
    c = f.write(content)

print('DONE')

# Verify
with open(path, 'r', encoding='utf-8') as f:
    c2 = f.read()

bad = [c2[i:i+3] for i in range(len(c2)-2) if ord(c2[i]) == 195 and ord(c2[i+1]) in range(160, 192)]
print(f'REMAINING CORRUPTED: {len(bad)}')

# Check for Ã pattern anywhere
import re
remaining = re.findall(r'Ã.', c2)
print(f'Remaining Ã sequences: {remaining[:10]}')
print(f'Last 200 chars: ...{c2[-200:]}')
