import { notFound } from 'next/navigation';
import OEmbed from '../../../components/OEmbed';
import { EmbedPlatform } from '../../../utils/constants';
import { PageProps } from '../../../types/page';
import { Metadata, ResolvingMetadata } from 'next';
import { getOEmbedData } from '../../../utils/oEmbed';

export const generateMetadata = async (
  { params, searchParams }: PageProps,
  _: ResolvingMetadata,
): Promise<Metadata> => {
  switch (params.platform) {
    case EmbedPlatform.REDDIT:
      try {
        const { title, provider_name } = await getOEmbedData(params.platform, searchParams?.url as string);

        return { title: provider_name.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase()), description: title };
      } catch (error) {
        console.error(error);

        return {};
      }
    default:
      return {};
  }
};

const Page = ({ params, searchParams }: PageProps) => {
  switch (params.platform) {
    case EmbedPlatform.REDDIT:
      return <OEmbed platform={params.platform} url={searchParams?.url as string} />;
    default:
      return notFound();
  }
};

export default Page;
