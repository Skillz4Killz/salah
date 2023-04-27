/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Inter } from "next/font/google";
import Ayah from "@/components/Ayah";

import CHAPTER_ONE from "@/constants/chapters/one.mdx";
import { MDXProvider } from "@mdx-js/react";
import { components } from "@/constants/mdx-components";
import Chapter from "@/components/Chapter";
import SectionHeader from "@/components/SectionHeader";

const inter = Inter({ subsets: ["latin"] });

const FOREWARD = [
  // TODO: arabic - Change these words to components that have special design

  `Audhubillahi minashaitanirajeem! Bismillah Ar Rahman Ar Raheem!
  Assalamualaikum Wa Rahmatullahi Wa Barakatuh!`,
  `After praising the king of all kings, the knower of the seen and the
  unseen, the master of the day of judgement, the one the only Allah
  subhana wa ta’ala the mighty and sending salutations on the imam of
  the prophets, the leader of all the prophets, Muhammad peace be upon
  him.`,
  `Dear brothers, sisters, and respected elders, this book was written
in the hopes that it would increase our understanding and knowledge
of Salah. Also it was in the hopes that this would make it easier
for anyone else looking to perfect their salah. Initially I was told
by someone in my family that I was making a mistake in my salah.
This began my journey of trying to find a book I could learn about
Salah. I was unable to find any single source for all aspects
related to Salah that would provide the answers with references to
Qur'an or Sunnah. However, I did discover many great books that will
be linked at the end for anyone who wishes to learn from them as
well.`,
  `Alhamdulilah! Alhamdulilah! Alhamdulilah! Praise and Thanks belong
to Allah subhana wa ta’ala for giving me the ability to learn the
best way to worship him and for allowing me to share that knowledge
through this book.`,
  `Please have patience with me and each other.`,
  `salahayahabc-8-46`,
];

const TABLE_OF_CONTENTS = [
  {
    name: "What is Salah?",
    sections: [
      { name: "Definition of Salah" },
      { name: "Effects of Salah" },
      { name: "Al Isra' Wal Miraj" },
      { name: "Why Arabic?" },
      { name: "Understanding Hadiths" },
    ],
  },
  {
    name: "Importance of Salah",
    sections: [{ name: "Missing Salah" }, { name: "Abandoning Salah" }],
  },
  {
    name: "Conditions of Salah",
    sections: [{ name: "Prohibited Locations for Salah" }],
  },
  { name: "Clothes For Salah" },
  {
    name: "Wudu",
    sections: [
      { name: "The definition of wudoo" },
      { name: "The prescription of wudoo in the kitaab and sunnah:" },
      { name: "The excellence of wudoo" },
      { name: "The components of wudoo" },
      { name: "at-tasmiyyah (mentioning allaah's name) " },
      { name: "washing the hands" },
      {
        name: "washing the mouth and nose together with one handful (of water)",
      },
      { name: "washing the mouth " },
      { name: "washing the nose and expelling the water " },
      { name: "washing the face " },
      { name: "running water through the beard with the fingers " },
      { name: "washing the arms including the elbows " },
      { name: "wiping the head and ears and 'imaamah " },
      { name: "Taking fresh water for the head and ears " },
      { name: "The way of wiping " },
      { name: "wiping over the 'imaamah (turban) only " },
      { name: "wiping over the turban and forelock " },
      { name: "washing the feet and ankles " },
      {
        name: "The reply to those who follow wiping of the feet without washing ",
      },
      { name: "other aspects of wudoo " },
      { name: "The siwaak " },
      { name: "performing the wudoo in the order mentioned in the ayaah " },
      {
        name: "al-mawaalaat (washing each part directly after the previous one - leaving no time gap in betwee",
      },
      { name: "beginning with the right " },
      { name: "economizing in the use of water and not being wasteful " },
      { name: "The du'aa after the wudoo " },
      { name: "washing each body-part once " },
      { name: "washing each body-part twice " },
      { name: "washing each body-part thrice " },
      { name: "The desirability of making wudoo for each prayer " },
      {
        name: "The one who is not sure if he has broken the wudoo or not relies upon that which he is certain of ",
      },
      { name: "a man and woman's washing from a single vessel " },
      { name: "making wudoo after eating camel meat " },
      { name: "drying the body parts after purification " },
      { name: "Those things which break wudoo " },
    ],
  },
  { name: "Facing The Kaabah" },
  {
    name: "Standing In Prayer",
    sections: [
      { name: `Sick person in a sitting position` },
      { name: `Prayer on a ship` },
      { name: `Sitting and standing in Tahajjud` },
      { name: `Wearing shoes` },
      { name: `Praying On Minbar` },
      { name: `Obligation of Sutrah` },
      { name: `What breaks the prayer?` },
      { name: `Facing graves prohibition` },
    ],
  },
  {
    name: "Intention",
    sections: [
      { name: `Raising the hands` },
      { name: `Right arm on top of the left` },
      { name: `Hands on the chest` },
      { name: `Direction of where to look` },
    ],
  },
  { name: "Opening Takbir" },
  { name: "Opening Duah" },
  {
    name: "Recitation",
    sections: [
      { name: `One ayah at a time` },
      { name: `Al Fatihah Requirement` },
      {
        name: `Don't recite behind the Imam in the loud prayers`,
      },
      { name: `Recite in the quiet prayers` },
      { name: `The Ameen` },
      { name: `After Al-Fatihah` },
      { name: `Combining similar sūrahs` },
      { name: `Reciting al-Fātiḥah only` },
      { name: `Mode of recitation` },
      { name: `Quiet and loud recitation in Tahajjud` },
      {
        name: `Prophet's recitation in the different prayers`,
      },
      { name: `Tartīl and beautiful voice when reciting` },
      { name: `Correcting the Imam` },
      {
        name: `Seeking refuge and spitting lightly`,
      },
    ],
  },
  {
    name: "Ruku",
    sections: [
      { name: `What is Ruku?` },
      { name: `Being at ease` },
      { name: `Adhkar` },
      { name: `Duration of the ruku` },
      { name: `Don't recite the Quran in ruku` },
      { name: `Rising from ruku` },
      { name: `Lengthening with ease` },
    ],
  },
  {
    name: "Sujood",
    sections: [
      { name: `Going down into sajdah on the hands` },
      { name: `The sajdah described` },
      { name: `Being at ease` },
      { name: `Adhkar of sujud` },
      { name: `Don't recite Quran in sujood` },
      { name: `Lengthening the sajdah` },
      { name: `Excellence of sajdah` },
      { name: `Sajdah on the ground and on mats` },
      { name: `Rising from sajdah` },
      { name: `muftarishan between the two sajdahs` },
      { name: `Iq'a between the two sajdahs` },
      { name: `Ease between the two sajdahs` },
      { name: `Lengthening the sitting between the two sajdahs` },
      { name: `Adhkar between the two sajdahs` },
      { name: `The second sajdah` },
      { name: `The sitting of rest` },
      {
        name: `Rising with hands for the next rakah`,
      },
    ],
  },
  {
    name: "Second Rakah",
    sections: [
      { name: `The obligation of reciting al-Fātiḥah in every rakʿah 122` },
    ],
  },
  {
    name: "First Tashahud",
    sections: [
      { name: `Moving the finger` },
      { name: `Supplication during it` },
      { name: `Manner of tashahhud` },
      { name: `Sending prayers on the Prophet` },
      { name: `Duah in the first tashahhud` },
      { name: `Standing for the third, and then the fourth rakʿah` },
      { name: `Qunut because of a calamity` },
      { name: `Qunut in the Witr Prayer` },
    ],
  },
  {
    name: "Final Tashahud",
    sections: [
      { name: `The obligation` },
      { name: `Sending prayers on the Prophet` },
      { name: `Seeking refuge before duah` },
      { name: `Duah before taslim` },
    ],
  },
  { name: "Taslim" },
  {
    name: "Special Salahs",
    sections: [
      { name: "Jumuah" },
      { name: "Tahajud" },
      { name: "Tasbih" },
      { name: "Eid" },
      { name: "Jannazah" },
      { name: "Entering Masjid" },
      { name: "Leaving And Entering The House" },
    ],
  },
  {
    name: "Post-Salah Actions",
    sections: [
      { name: "Ayat Ul Kursi" },
      { name: "Tasbih" },
    ]
  },
  {
    name: "Special Notes",
    sections: [
      { name: "Handling Distractions" },
      { name: "Praying Behind An Imam" },
      { name: "Praying Directly Behind An Imam" },
      { name: "Praying As The Imam" },
    ],
  },
];

const CHAPTERS = [CHAPTER_ONE];

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between px-8 py-6 md:px-24 md:py-16 ${inter.className}`}
    >
      <div className="flex flex-col">
        {/* TODO: cover - Make the cover page look nicer */}
        <h1 className="text-4xl text-center font-bold pb-2 mb-3 border-b-[1px] ">Perfecting Your Salah</h1>
        <div className="flex items-center justify-center">
          <Image
            src="https://media.discordapp.net/attachments/968119334360739843/1100516264130121878/image.png?width=2202&height=1010"
            width={600}
            height={300}

            alt="bismillah"
          /></div>

        <SectionHeader>Forward</SectionHeader>
        <div>
          {FOREWARD.map((text, index) => {
            if (text.startsWith("salahayahabc")) {
              const [x, surah, ayah] = text.split("-");

              return (
                <Ayah key={index} surah={Number(surah)} ayah={Number(ayah)} />
              );
            }

            return (
              <div key={index}>
                <p>{text}</p>
                <br />
              </div>
            );
          })}
        </div>


        <SectionHeader>Table of Contents</SectionHeader>
        <div>
          {TABLE_OF_CONTENTS.map((content, index) => {
            return (
              <div key={index}>
                <p>
                  {index + 1}. {content.name}
                </p>
                {content.sections?.length ? (
                  <div>
                    {content.sections.map((section, i) => {
                      return (
                        <p className="ml-5" key={i}>
                          {i + 1}. {section.name}
                        </p>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        {/* Chapters */}
        <div className="my-16">
          <MDXProvider components={components}>
            {CHAPTERS.map((Chapter, i) => {
              return <div key={i}>
                <h1></h1>
                <Chapter />
              </div>
            })}
          </MDXProvider>
        </div>
      </div>
    </main>
  );
}
