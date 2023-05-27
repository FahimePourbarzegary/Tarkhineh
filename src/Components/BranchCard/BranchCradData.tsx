type BranchCardDataType = {
  id: number;
  branch: string;
  branchAddress: string;
  imageUrl: string;
}[];
import ekbatan from "../../assets/branches/ekbatan.png";
import chalose from "../../assets/branches/chalose.png";
import aghdasieh from "../../assets/branches/aghdasieh.png";
import vanak from "../../assets/branches/vanak.png";
const BranchCardData: BranchCardDataType = [
  {
    id: 1,
    branch: "شعبه اکباتان",
    branchAddress: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    imageUrl: ekbatan,
  },
  {
    id: 2,
    branch: "شعبه چالوس ",
    branchAddress:
      "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
    imageUrl: chalose,
  },
  {
    id: 3,
    branch: "شعبه اقدسیه",
    branchAddress: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
    imageUrl: aghdasieh,
  },
  {
    id: 4,
    branch: "شعبه ونک",
    branchAddress: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
    imageUrl: vanak,
  },
];
export default BranchCardData;
