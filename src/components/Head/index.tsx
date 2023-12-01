type Props = {
    title: string;
    desc: string;
}

export default function Head({title, desc}: Props) {
  return (
    <div className="h-screen bg-black w-full relative" style={{backgroundImage: "url('./assets/bg-head.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <div className="min-h-[700px] md:min-h-[600px] absolute w-full p-4 md:p-7 gradient_head bottom-0 flex items-center justify-end flex-col">
        <h2 className="text-3xl md:text-5xl font-black text-white text-center">{title}</h2>
        <h3 className="text-xl md:text-3xl font-semibold text-white text-center">{desc}</h3>
      </div>
    </div>
  );
}
