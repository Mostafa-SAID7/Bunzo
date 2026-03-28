import os
import re

assets_dir = r"c:\Users\Memo\Desktop\Projects\Pulls\New folder\Bunzo\src\assets\images"
src_dir = r"c:\Users\Memo\Desktop\Projects\Pulls\New folder\Bunzo\src"

all_images = os.listdir(assets_dir)
used_images = set()

# Normalize extensions and ignore case for broader matching
for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith((".tsx", ".ts", ".css", ".svg")):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                    for img in all_images:
                        # Check for filename in content (simple check)
                        if img in content:
                            used_images.add(img)
            except Exception as e:
                print(f"Error reading {file_path}: {e}")

unused_images = [img for img in all_images if img not in used_images]

print(f"Total images: {len(all_images)}")
print(f"Used images: {len(used_images)}")
print(f"Unused images: {len(unused_images)}")
print("\nUnused images list:")
for img in unused_images:
    print(img)
