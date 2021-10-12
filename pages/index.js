import React, { Fragment } from 'react';
import ListHeroes from '../components/ListHeroes';
import Head from 'next/head';

export default function HomePage(props) {
  // console.log(props);

  return (
    <Fragment>
      <Head>
        <meta property="og:type" content="article" />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta property="og:title" content="Get Information of all heroes. " />
        <meta property="og:description" content="The superhero API, is a quantified and programatically accessible data source of all superheroes from both the comic universe" />
        <meta property="og:image" content="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/1-a-bomb.jpg" />
      </Head>
      <ListHeroes heroes={props.heroes} />
    </Fragment>
  )
}


export async function getStaticProps() {
  const resp = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
  const response = await resp.json();
  const heroes = response.map((hero) => ({
    id: hero.id,
    name: hero.name,
  }))


  return {
    props: {
      heroes: heroes,
    }
  }
}