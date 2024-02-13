import WaveTrack from '@/components/track/wave.track';
import { useSearchParams } from 'next/navigation'
import Container from '@mui/material/Container';
import { sendRequest } from '@/utils/api';
import { notFound } from 'next/navigation'
import type { Metadata, ResolvingMetadata } from 'next'
import slugify from 'slugify';

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
        // read route params
        // const slug = params.slug

        // fetch data
        const temp = params?.slug?.split('.html') ?? [];
        const id = temp[0]?.split('-');

        const res = await sendRequest<IBackendRes<ITrackTop>>({
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tracks/${id}`,
            method: "GET",
            // nextOption: { cache: "no-store" },
        })

        // optionally access and extend (rather than replace) parent metadata
        // const previousImages = (await parent).openGraph?.images || []

        return {
            title: res.data?.title,
            description: res.data?.description,
            openGraph: {
                title: 'Hỏi Dân IT',
                description: 'Beyond Your Coding Skills',
                type: 'website',
                images: [`https://raw.githubusercontent.com/hoidanit/images-hosting/master/eric.png`],
            },
        }
    }

const DetailTrackPage = async (props: any) => {
    const { params } = props;

    const temp = params?.slug?.split('.html') ?? [];
    const temp1 = (temp[0]?.split('-') ?? []) as string[];
    const id = temp1[temp1.length - 1];

    const res = await sendRequest<IBackendRes<ITrackTop>>({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tracks/${id}`,
        method: "GET",
        nextOption: { cache: "no-store" },
    })

    const res1 = await sendRequest<IBackendRes<IModelPaginate<ITrackComment>>>({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tracks/comments`,
        method: "POST",
        queryParams: {
            current: 1,
            pageSize: 100,
            trackId: id,
            sort: "-createdAt"
        }
    })
    await new Promise(resolve => setTimeout(resolve, 3000))

    if (!res?.data)
        notFound()


    return (
        <Container>
            <div>
                <WaveTrack
                    track={res?.data ?? null}
                    comments={res1?.data?.result ?? null}
                />
            </div>
        </Container>
    )
}

export default DetailTrackPage;