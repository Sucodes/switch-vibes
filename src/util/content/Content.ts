import { uche, susu, feranmi } from "assets/assetPath";
import {
  CardDataProps,
  OtherProps,
  PerkDataProps,
} from "util/types/ContentTypes";

export const aboutData: OtherProps[] = [
  {
    title: "Intelligent Song Matching:",
    text: "Our intelligent track matching algorithms ensure precise track finding, preserving the integrity of your playlists during the migration process.",
  },
  {
    title: "Unlimited Playlist Size:",
    text: "Unlike other services, we don't restrict you with limitations on the number of tracks you can migrate from your playlists. Whether you have 50 or 5000 songs in your playlist, SwitchVibes allows you to transfer them all at once.",
  },
  {
    title: "No Account Access Required:",
    text: "We value your privacy and security. We don't require access to your source and destination platform accounts. Simply provide the playlist link, and we'll take care of the rest.",
  },
  {
    title: "Intuitive Interface:",
    text: "We believe that simplicity is key. Our user-friendly interface makes it easy for anyone to jump right in and go straight to doing what matters.",
  },
];

export const perkData: PerkDataProps[] = [
  {
    heading: "Faster runtime",
    subheading:
      "As at writing this, our performance testing reveals that SwitchVibes completes playlist migrations up to 77.13%. This was tested across different sizes of playlists.",
  },
  {
    heading: "No Account Access Required",
    subheading:
      "SwitchVibes offers a simpler, more secure and privacy-conscious approach as we do not require users to log into their source and destination platform accounts to grant access for the migration to happen.",
  },
  {
    heading: "Accurate tracks",
    subheading:
      "Besides it's speed, SwitchVibes also excels in maintaining the accuracy and integrity of your playlists. We understand the importance of preserving your carefully curated playlists, and our intelligent song matching algorithm ensures precise migration results.",
  },
  {
    heading: "Higher Success Rate in Track Finding",
    subheading:
      "We consistently achieves a higher success rate in finding all tracks within a playlist. Our intelligent song matching algorithms ensure that your playlist is meticulously migrated, reducing the number missing tracks to the barest minimum.",
  },
  {
    heading: "Flagged tracks",
    subheading:
      "We don’t leave you out to hang dry, we admit our shortcomings. And that is why we include flagged tracks (a list of the tracks whose accuracy have been marked low by our intelligent song matching algorithm). This allows you to go back and crosscheck these specific tracks and ensure they are the correct tracks (which most of the time, they are).",
  },
  {
    heading: "No Limitations on Playlist Size",
    subheading:
      "SwitchVibes does not impose any limitations on the number of tracks you can migrate from a playlist. Whether you have 50, 500, or even 1000 songs in your playlist, SwitchVibes allows you to transfer it in its entirety without any constraints.",
  },
];

export const faqData: OtherProps[] = [
  {
    title:
      "Why are some tracks not found on the destination streaming platform?",
    answer:
      "There are a few reasons why some of the tracks in your source playlist may not be found on the destination platform. The simplest of them is that the track is not listed in the destination platform. If this is not the case, then it just happens that the track did not meet the matching criteria of our algorithm. We are constantly working on this.",
  },
  {
    title:
      "Why does the new playlist have more tracks missing than the specified number that were not found?",
    answer:
      " Some playlists contain duplicate tracks. SwitchVibes picks the first of such tracks and does not include the same track again. Be rest assured, the only tracks that won’t be in your newly converted playlist are the ones that are stated to be not found.",
  },
  {
    title: "Why are some of the tracks in my new playlist flagged?",
    answer:
      "SwitchVibes searches for a match of each track on your source playlist using data like its title, duration etc. Sometimes weak matches are found and these are included in the flagged tracks.",
  },
];

export const cardData: CardDataProps[] = [
  {
    image: uche,
    title: "Onyenso Uchenna",
    subTitle: "Backend Engineer",
    links: [
      "mailto:alphadev.onyenso@gmail.com",
      "https://x.com/yensouchenna?s=21&t=4IpG8uFsqR5jj-_KzcfsEg",
      "https://www.linkedin.com/in/onyenso/",
      "https://github.com/Onyenso",
    ],
  },
  {
    image: susu,
    title: "Suvwe Money",
    subTitle: "Frontend Engineer",
    links: [
      "mailto:rhounamoney@gmail.com",
      "https://x.com/moneyrhuona?s=21&t=4IpG8uFsqR5jj-_KzcfsEg",
      "https://www.linkedin.com/in/oghenesuvwe-money-100b04228/",
      "https://github.com/Sucodes",
    ],
  },
  {
    image: feranmi,
    title: "Feranmi Oluwagbemide",
    subTitle: "Product Designer",
    links: [
      "mailto:6feranmi@gmail.com",
      "https://twitter.com/inverteddn?s=11&t=4IpG8uFsqR5jj-_KzcfsEg",
      "https://www.linkedin.com/in/feranmi-oluwagbemide-a3ba02188/",
      "https://www.behance.net/oluwagbferanmi",
    ],
  },
];
