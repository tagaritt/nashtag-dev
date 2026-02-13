import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-8 max-w-10xl">
        {/* Name */}
        <h1 className="text-8xl font-bold text-center">Tinashe Tagarisa</h1>
        
        {/* Title(s) & Certification(s) */}
        <h3 className="text-4xl font-semibold text-center text-gray-300">Software Developer | AWS Certified Cloud Practitioner</h3>

        {/* Summary Sentence */}
        <p className="text-2xl font-medium text-center text-gray-400 ">
          I care about how software works, looks, and speaks.
        </p>
      </div>
    </div>
  );
}
