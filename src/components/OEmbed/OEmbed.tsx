import { getOEmbedData } from '../../utils/oEmbed';

type OEmbedProps = {
  platform: string;
  url: string;
};

const OEmbed = async ({ platform, url }: OEmbedProps) => {
  try {
    const data = await getOEmbedData(platform, url);
    const { html } = data;

    return (
      <>
        <pre>
          <code>{JSON.stringify(data)}</code>
        </pre>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </>
    );
  } catch (error) {
    return <div>Unable to render content</div>;
  }
};

export default OEmbed;
