import { Animal,Owner,User } from "../../types";
import IMAGE_01 from "../images/dog1.jpg";
import IMAGE_02 from "../images/dog2.jpg";
import IMAGE_03 from "../images/dog3.jpg";
import IMAGE_04 from "../images/dog4.jpg";
import IMAGE_05 from "../images/dog5.jpg";
import IMAGE_06 from "../images/dog6.jpg";
import IMAGE_07 from "../images/dog7.jpg";
import IMAGE_08 from "../images/dog8.jpg";
import IMAGE_09 from "../images/dog9.jpg";
import IMAGE_10 from "../images/dog10.jpg";
import IMAGE_13 from "../images/dog13.jpg";
import IMAGE_14 from "../images/dog14.jpg";

import IMAGE_15 from "../images/dog14.jpg";
import IMAGE_16 from "../images/dog14.jpg";
import IMAGE_17 from "../images/dog14.jpg";
import IMAGE_18 from "../images/dog14.jpg";

import User_Profile from "../images/User_Profile.jpg";

export const animals: Animal[] = [
  {
    id: 1,
    name: "อัลเฟรด",
    type: "dog",
    ownerId: 1,
    description:
      "nice nice nice",
    message:
      "น้องยังอยู่นะคะ สนใจรับไปดุแลไหมคะ",
    image: IMAGE_01,
  },
  {
    id: 2,
    name: "ซาร่า",
    type: "dog",
    ownerId: 2,
    description:
      "มาตามหารักแท้ที่ดูแลกันได้ เด็กหญิงวัยสองเดือน ร่าเริง แข็งแรงมากๆ ถ่ายพยาธิและทำวัคซีนรวมห้าโรคให้แล้วสองเข็ม",
    message: "ได้ครับผม",
    image: IMAGE_02,
  },
  {
    id: 3,
    name: "มัสฟิน",
    type: "dog",
    ownerId: 3,
    description:
      "สปริทช์จากการไม่พร้อมเลี้ยง ต้องอยู่แต่ในคอกสี่เหลี่ยมแคบๆมานานเท่าใด ไม่เคยได้มีโอกาสออกมาวิ่งเล่น ไม่ได้วัคซีนมาสองปีแล้ว ทางเพจช่วยมากรูมมิ่ง ตรวจเลือด เตรียมทำหมันและตามหาเจ้านายใจดีที่พร้อมชดเชยให้ความรักความอบอุ่น  ",
    message:
      "น้องมีคนรับไปเลี้ยงแล้วค่ะ ขอโทษด้วยนะคะ",
    image: IMAGE_03,
  },
  {
    id: 4,
    name: "ปิ้ก",
    type: "dog",
    ownerId: 2,
    description:
      "น้องหมาสีน้ำตาล มีแผงขนที่คอสีขาว เพศเมีย อายุประมาณ 8 เดือน นิสัยเชื่อง เรียบร้อย เป็นมิตรกับคน ไม่พบปลอกคอ ไม่ทราบว่ามี",
    message: "ขอบคุณครับ จะไปรับน้องวันอาทิตย์นะครับ",
    image: IMAGE_04,
  },
  {
    id: 5,
    name: "เต้าหู้",
    type: "dog",
    ownerId: 1,
    description:
      "เดินหลงจากบ้านมาไกลและนานจนหาทางกลับไม่ถูก ไม่มีใครตามหา รอแล้วรออีก วนเวียนอยู่ที่เดิมจนคนที่เจอสงสารเลยช่วยมาหาบ้าน",
    message: "มึงสิ อิกะเทย!",
    image: IMAGE_05,
  },
  {
    id: 6,
    name: "โตโน่",
    type: "dog",
    ownerId: 3,
    description:
      "เมือไรจะถึงคิวของโตโน่ บ้างค้าบ ในเมื่อทุกชีวิต​มีสิทธิ์​มีบ้าน​ บีเกิ้ลผสมตกยาก รอดชีวิตมาได้ ก็อยากมีชีวิตใหม่ที่สดใสและอบอุ่น",
    message:
      "Thx you krub ^^",
    image: IMAGE_06,
  },
  {
    id: 7,
    name: "เหลง",
    type: "dog",
    ownerId: 2,
    description:
      " รอดตายมาจากแดนไกล ทั้งผอมทั้งฝนตก ทั้งหิว  ช่วยมาด้วยความสงสาร แต่พวกเขาจะมีโอกาสมีบ้านไหม ",
    message:
      "งั้นยังไม่รับก่อนนะครับ ไกลไปหน่อย",
    image: IMAGE_07,
  },
  {
    id: 8,
    name: "มิเชล",
    type: "dog",
    ownerId: 1,
    description:
      "ทำยังไง​ให้มิเชล​  อายุขวากว่าได้มีบ้านอีกสักครั้ง​ ชีวิตเหมือนจะดี​ แต่เหมือนโลกทั้งใบดับสลาย ขอ​โอกาสให้หมาไทยตัวเล็กๆ​ได้มีชี​วิตใหม่ที​อบอุ่น​ปลอดภัย​ด้วยค่า",
    age: "27",
    location: "Irvine, CA",
    info1: 'Straight, Single, 5"10',
    info2: "Tea Totaller, Loves Photography & Travel",
    info3: "Beaches, Mountain, Cafe, Movies",
    info4: "Last seen: 23h ago",
    message:
      "รับงานไหมครับ",
    image: IMAGE_08,
  },
  {
    id: 9,
    name: "น้องข้าวหอม",
    type: "dog",
    ownerId: 4,
    description:
      "น่ารักมากครับ",
    message:
      "โสดป่าว ไอหนู",
    image: IMAGE_13,
  },
  {
    id: 10,
    name: "น้องพลอย",
    type: "dog",
    ownerId: 4,
    description:
      "น่ารักที่สุด",
    message:
      "เค",
    image: IMAGE_14,
  },
];

export const owners: Owner[] = [
   {
    id: 1,
    name: "มูลนิธิ Soi Dog",
    image: "https://scontent.fbkk22-5.fna.fbcdn.net/v/t39.30808-6/240173460_4717242151628388_2743492107685777910_n.png?_nc_cat=1&_nc_rgb565=1&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHP_g4momt45-wDrY1RlKUAks3R3GJfsFOSzdHcYl-wUz-7J6CJxqgPQ_9-tvQLqOouiEnDBlWNimTdxqHXJUmR&_nc_ohc=u7dbLuxB3RIAX9hzVBq&tn=ambbegRvOgxchCBu&_nc_ht=scontent.fbkk22-5.fna&oh=9f57b7dda24e2b9c0e64b8c095afda2a&oe=61A26425",
    location: "สุขุมวิทย์",
  },
  {
    id: 2,
    name: "มูลนิธิบ้านสงเคราะห์สุนัขพิการ",
    image: "https://f.ptcdn.info/582/051/000/oqwubwaaBQ4glILnLQ-o.jpg",
    location: "คลองเตย",
  },
  {
    id: 3,
    name: "มูลนิธิเกาะสุนัข",
    image: "http://www.bansuanporpeang.com/files/images/user1905/Photo0251.jpg",
    location: "คลองสาม",
  },
  {
    id: 4,
    name: "มูลนิธิน้องปิงปิง",
    image: "https://scontent.fbkk22-8.fna.fbcdn.net/v/t1.18169-9/10984632_811190852311492_1600729095523285402_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFsDtux_jECajiu0P3fpUV5aH3MSs5lgc5ofcxKzmWBzhzQPAGt-7sSfQgFQzsMqLiMEiL0yqXRuCgoGzqGkoi-&_nc_ohc=4m7SNPJ2-fwAX_lQOnX&_nc_ht=scontent.fbkk22-8.fna&oh=d360af478a4938b86cff0b77066502d3&oe=61C46771",
    location: "ยะลา",
  },
];

export const users: User[] = [
  {
    id: 1,
    name: "Kwin Prapawong",
    description:
      "nice nice nice",
    message:
      "",
    image: User_Profile,
    age: "22",
    location: "รัชดา, กรุงเทพ",
    info1: 'โปรแกรมเมอร์อิสระ ,โสด, 56',
    info2: "รักสัตว์ อยู่คนเดียว อยากรับสัตว์มาอยู่เป็นเพื่อนครับ",
    adopt: 4,

  },
];

