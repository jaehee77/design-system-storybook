import { useState } from 'react';
import { TagButton } from './TagButton';

interface TagList<T extends string> {
  tagList: T[];
  onTagClick: (tag: string) => void;
}

export function TagList<T extends string>({ tagList, onTagClick }: TagList<T>) {
  const [selectedTag, setSelectedTag] = useState<T>(tagList[0]);
  return (
    <div
      className="flex gap-x-4"
      onClick={(e) => {
        const eventTarget = e.target as HTMLButtonElement;
        const tag = eventTarget.textContent as T;
        onTagClick(tag);
      }}
    >
      {tagList.map((tag) => (
        <TagButton
          key={tag}
          isChecked={tag === selectedTag}
          onHandleClick={() => setSelectedTag(tag)}
        >
          {tag}
        </TagButton>
      ))}
    </div>
  );
}
