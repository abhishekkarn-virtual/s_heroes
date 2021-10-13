import HeroDetail from '../../components/HeroDetail';
import Head from 'next/head';
import { Fragment } from 'react';

export default function HeroDetails({ heroData }) {
    console.log("Hero-Detail", heroData)
    if (!heroData) {
        heroData = {
            id: 1,
            name: 'test',
            image: '',
            description: '',
        }
    }
    const { id, name, image, description } = heroData;

    return (
        <Fragment>
            <Head>
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`http://localhost:3000/${id}`} />
                < meta property="og:title" content={`Get Information about ${name} `} />
                <meta property="og:description" content="The superhero API, is a quantified and programatically accessible data source of all superheroes from both the comic universe" />
                <meta property="og:image" content={image} />
            </Head>
            <HeroDetail
                id={id}
                name={name}
                image={image}
                description={description}
            />
        </Fragment>
    )
}

export async function getServerSideProps(context) {
    const heroId = context.params.heroId;

    const resp = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${heroId}.json`);
    const response = await resp.json();
    console.log('response', response);

    return {
        props: {
            heroData: {
                id: response.id,
                name: response.name,
                image: response.images?.md,
                description: response.work?.occupation,
            }
        }
    }
};

// export async function getStaticPaths() {

//     const heroes = [1, 2, 3, 4, 5, 6, 7, 8];

//     return {
//         fallback: true,
//         paths: heroes.map((hero) => ({
//             params: { heroId: hero.toString() },
//         })),
//     }
// };