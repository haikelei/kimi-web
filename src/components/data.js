import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

const benefitOne = {
  title: "精选机票",
  desc: "我们为您精心挑选了全球各地的特价机票，帮助您以最划算的价格，享受最优质的旅程。",
  image: "https://zeus-pic-bucket.oss-cn-hangzhou.aliyuncs.com/shengcang/tcSBfqVpR.png",
  bullets: [
    {
      title: "跨境特价",
      desc: "体验全球旅行的超值机票优惠。",
      icon: <FaceSmileIcon />,
    },
    {
      title: "国内特惠",
      desc: "享受国内各大热门城市的特价机票。",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "限时抢购",
      desc: "不要错过任何限时折扣，抢购最优惠的票价。\n",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "升舱优惠",
  desc: "为您整理了最新、最划算的升舱优惠信息，让您以更低的价格，享受更高的飞行体验。",
  image: "https://zeus-pic-bucket.oss-cn-hangzhou.aliyuncs.com/shengcang/Wc-gQzcmY.png",
  bullets: [
    {
      title: "商务舱升舱",
      desc: "商务舱的舒适体验，现以优惠价格为您呈现。",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "头等舱升舱",
      desc: "头等舱的尊贵享受，不再遥不可及。",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "会员专享",
      desc: "加入我们的会员，享受专属的升舱优惠。",
      icon: <SunIcon />,
    },
  ],
};

const benefitThree = {
  title: "酒店优惠",
  desc: "精选了各大城市的酒店优惠信息，确保您在每一个目的地，都能享受到最舒适的居住环境。",
  image: "https://zeus-pic-bucket.oss-cn-hangzhou.aliyuncs.com/shengcang/mwMLHSBX9.png",
  bullets: [
    {
      title: "豪华酒店特惠",
      desc: "享受五星级酒店的豪华服务，价格却非常亲民。",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "精品酒店优惠",
      desc: "独具特色的精品酒店，让您的每一次入住都成为难忘的体验。",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "连锁酒店促销",
      desc: "可靠的连锁酒店品牌，提供舒适且经济的住宿选择。",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo, benefitThree};
