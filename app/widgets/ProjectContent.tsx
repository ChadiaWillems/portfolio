import TypoSectionHeader from '@/app/components/typo/TypoSectionHeader';
import ButtonAction from '@/app/components/buttons/ButtonAction';
import Image from 'next/image';

interface ContentProps {
  image: string;
  title: string;
  challenge?: string;
  concept?: string;
  solution?: string;
  links: { label: string; url: string }[];
}

export default function ProjectContent({ image, title, challenge, concept, solution, links }: ContentProps) {
    return (
    <div className="lg:col-span-2 space-y-20">
      <div className="relative border border-white/10 p-2 bg-neutral-900/50 group overflow-hidden aspect-video">
        {image ? (
          <Image
            src={image}
            alt={`Project showcase: ${title}`}
            fill
            priority
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700 p-2"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
        ) : (
          <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-neutral-500 font-mono">
            NO_IMAGE
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-16">
        {challenge && (
          <section>
            <TypoSectionHeader number="02" title="The Challenge" />
            <p className="text-neutral-300 text-xl leading-relaxed whitespace-pre-line">{challenge}</p>
          </section>
        )}
        {concept && (
          <section>
            <TypoSectionHeader number="03" title="The Concept" />
            <p className="text-neutral-300 text-xl leading-relaxed whitespace-pre-line">{concept}</p>
          </section>
        )}
        {solution && (
          <section>
            <TypoSectionHeader number="04" title="The Solution" />
            <p className="text-neutral-300 text-xl leading-relaxed whitespace-pre-line">{solution}</p>
          </section>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-12 border-t border-white/10">
        {links?.map((link) => (
          <ButtonAction key={link.label} label={link.label} href={link.url} variant="primary" />
        ))}
      </div>
    </div>
  );
}