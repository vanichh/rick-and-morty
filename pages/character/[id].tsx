import { URL_API_CHARACTER } from "utils/constants/api";
import { ICharacter } from "interfaces/character";
import { GetServerSideProps, NextPage } from "next/types";
import { ReactNode } from "react";
import { DetailCharacter } from "components/detail-character";

interface IcharacterInfoProps {
  infoСharacter: ICharacter;
  children?: ReactNode;
}

const characterInfo: NextPage<IcharacterInfoProps> = ({ infoСharacter }) => {
  return <DetailCharacter infoСharacter={infoСharacter} />;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const response = await fetch(`${URL_API_CHARACTER}/${query.id}`);
  const infoСharacter = await response.json();

  return {
    props: { infoСharacter },
  };
};
export default characterInfo;
