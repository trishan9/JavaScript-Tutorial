import os

for i in range(1, 31):
    os.system(f"touch day{i}.md")

for i in range(10, 31):
    os.rename(f"day{i}.md", f"day_{i}.md")