export default function IntroVideo({ onComplete }) {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <video
        src="/intro.mp4"
        autoPlay
        muted
        onEnded={onComplete}
        className="w-full h-full object-cover"
      />
    </div>
  );
}