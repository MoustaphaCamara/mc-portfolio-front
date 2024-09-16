export interface SanityData {
  bgColor: string;
  title: string;
  description: string;
  name: string;
  imgUrl: string;
  year: string;
  company: string;
  occupation: string;
  contract: string;
  projectLink: string;
  sourceCode: string;
  icon: Icon[];
}

interface Icon {
  asset: {
    _ref: string;
    _type: string;
  };
  _key: string;
  _type: string;
}
