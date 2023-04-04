export default function Stoplight() {
  return (
    <div class="flex gap-2">
      <a
        href="https://nounish.af"
        draggable={false}
        target="_blank"
        rel="noopener noreferrer"
        class="w-3.5 h-3.5 bg-red rounded-full hover:bg-red/80"
      />
      <a
        href="https://nouns.wtf"
        draggable={false}
        target="_blank"
        rel="noopener noreferrer"
        class="w-3.5 h-3.5 bg-yellow rounded-full hover:bg-yellow/80"
      />
      <a
        href="https://nouns.ooo"
        draggable={false}
        target="_blank"
        rel="noopener noreferrer"
        class="w-3.5 h-3.5 bg-green rounded-full hover:bg-green/80"
      />
    </div>
  );
}
