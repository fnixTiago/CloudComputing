import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// import { connect } from "react-redux";
import stylesSection from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import Collapse from "@material-ui/core/Collapse";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import LanguageIcon from "@material-ui/icons/Language";
import Muted from "components/Typography/Muted.js";
import { CardMedia } from "@material-ui/core";
// import { ReactTinyLink } from "react-tiny-link";
import _ from "lodash";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import { element } from "prop-types";
import { ReactTinyLink } from "react-tiny-link";

// import Iframe from "react-iframe";
// const useStyles = makeStyles(styles);
const useStyles = (theme) => ({
  root: {
    maxWidth: "none",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "red",
  },
});

class Resultado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Map(),
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.dataTotal != this.props.dataTotal) {
      this.setState(
        {
          data: this.props.dataTotal,
        },
        function () {
          // this.asyncImages();
          //   var screenshots = this.state.data.map((item, i)=>{
          //     var link = item.link
          //     return axios.get(`https://screenshotapi.net/api/v1/screenshot?url=${link}&token=REUXZIEP5RLXUEFS8PEF0RZTH15SJK5A`)
          //     .then((res) => {
          //       const scree = res.data.screenshot;
          //       // this.state.image[i] = scree
          //       return scree;
          //     });
          //   })
          //   var ttt = this
          //   Promise.all(screenshots).then(function(results) {
          //     console.log("results",results)
          //     ttt.setState({
          //       image:  results
          //     })
          // })
          //   // console.log(screenshot);
        }
      );
    }
  }

  render() {
    var links = {
      "0.txt": "http://cvpr2020.thecvf.com/",
      "1.txt": "https://2020.emnlp.org/",
      "2.txt": "https://acl2020.org/",
      "3.txt":
        "https://brown-deep-learning.github.io/dl-website-2020/index.html",
      "4.txt": "https://creativecommons.org/licenses/by-sa/4.0/",
      "5.txt": "https://eccv2020.eu/",
      "6.txt": "https://forms.gle/4ogw4QrTQacjj4h37",
      "7.txt": "https://github.com/AI-metrics/AI-metrics",
      "8.txt": "https://github.com/AcutronicRobotics/gym-gazebo2",
      "9.txt": "https://github.com/Breakend/gym-extensions",
      "10.txt": "https://github.com/GeekAlexis/Guardian",
      "11.txt": "https://github.com/Hananel-Hazan/bindsnet",
      "12.txt": "https://github.com/HiLab-git/SSL4MIS",
      "13.txt": "https://github.com/MedMNIST/MedMNIST",
      "14.txt": "https://github.com/MishaLaskin/rad",
      "15.txt": "https://github.com/NVlabs/nvdiffrast",
      "16.txt": "https://github.com/RUCAIBox/RecBole",
      "17.txt":
        "https://github.com/RedditSota/state-of-the-art-result-for-machine-learning-problems",
      "18.txt": "https://github.com/Rudrabha/Wav2Lip",
      "19.txt": "https://github.com/adam-katona/dota2_death_prediction",
      "20.txt": "https://github.com/astooke/rlpyt",
      "21.txt": "https://github.com/danielgatis/rembg",
      "22.txt": "https://github.com/ericsujw/InstColorization",
      "23.txt": "https://github.com/facebookresearch/CollaQ",
      "24.txt": "https://github.com/facebookresearch/Horizon",
      "25.txt": "https://github.com/facebookresearch/pifuhd",
      "26.txt": "https://github.com/facebookresearch/torchbeast",
      "27.txt": "https://github.com/google/trax",
      "28.txt": "https://github.com/hill-a/stable-baselines",
      "29.txt": "https://github.com/kengz/SLM-Lab",
      "30.txt": "https://github.com/microsoft/fastformers",
      "31.txt": "https://github.com/openai/gym",
      "32.txt": "https://github.com/paperswithcode",
      "33.txt": "https://github.com/paperswithcode/paperswithcode-data",
      "34.txt": "https://github.com/paperswithcode/sota-extractor",
      "35.txt": "https://github.com/pemami4911/deep-rl",
      "36.txt": "https://github.com/sebastianruder/NLP-progress",
      "37.txt": "https://github.com/yang1fan2/Dota2-Prediction",
      "38.txt": "https://iclr.cc/Conferences/2020",
      "39.txt": "https://icml.cc/Conferences/2020",
      "40.txt":
        "https://join.slack.com/t/paperswithcode/shared_invite/enQtNTI3NDE2NjQ0ODM0LTdmNzNjODkwOGY0MjU4YzgzNDZhNGM1YWIzYmZhNzk5MTFkYWU4YWNjN2JjZDhlNjJiYjFkYjYwNjkzYzdiZDk",
      "41.txt":
        "https://join.slack.com/t/paperswithcode/shared_invite/zt-f3dj9aaf-ypjgzwiDF4EonhL~IcFVBw",
      "42.txt": "https://medium.com/paperswithcode",
      "43.txt": "https://neurips.cc/Conferences/2020",
      "44.txt": "https://openai.com/five/",
      "45.txt":
        "https://openreview.net/group?id=ML_Reproducibility_Challenge/2020",
      "46.txt": "https://paperswithcode.com/",
      "47.txt": "https://paperswithcode.com/?page=2",
      "48.txt": "https://paperswithcode.com/about",
      "49.txt": "https://paperswithcode.com/accounts/login?next=/",
      "50.txt": "https://paperswithcode.com/accounts/login?next=/about",
      "51.txt":
        "https://paperswithcode.com/accounts/login?next=/accounts/login",
      "52.txt":
        "https://paperswithcode.com/accounts/login?next=/accounts/register",
      "53.txt":
        "https://paperswithcode.com/accounts/login?next=/author/greg-brockman",
      "54.txt": "https://paperswithcode.com/accounts/login?next=/methods",
      "55.txt": "https://paperswithcode.com/accounts/login?next=/rc2020",
      "56.txt":
        "https://paperswithcode.com/accounts/login?next=/site/cookies-policy",
      "57.txt": "https://paperswithcode.com/accounts/login?next=/site/privacy",
      "58.txt": "https://paperswithcode.com/accounts/login?next=/site/terms",
      "59.txt": "https://paperswithcode.com/accounts/login?next=/sota",
      "60.txt": "https://paperswithcode.com/accounts/login?next=/task/dota-2",
      "61.txt":
        "https://paperswithcode.com/accounts/login?next=/task/openai-gym",
      "62.txt": "https://paperswithcode.com/accounts/login?next=/trends",
      "63.txt": "https://paperswithcode.com/accounts/password_reset/",
      "64.txt": "https://paperswithcode.com/accounts/register?next=/",
      "65.txt": "https://paperswithcode.com/accounts/register?next=/about",
      "66.txt":
        "https://paperswithcode.com/accounts/register?next=/accounts/login",
      "67.txt":
        "https://paperswithcode.com/accounts/register?next=/accounts/register",
      "68.txt":
        "https://paperswithcode.com/accounts/register?next=/author/greg-brockman",
      "69.txt": "https://paperswithcode.com/accounts/register?next=/methods",
      "70.txt": "https://paperswithcode.com/accounts/register?next=/rc2020",
      "71.txt":
        "https://paperswithcode.com/accounts/register?next=/site/cookies-policy",
      "72.txt":
        "https://paperswithcode.com/accounts/register?next=/site/privacy",
      "73.txt": "https://paperswithcode.com/accounts/register?next=/site/terms",
      "74.txt": "https://paperswithcode.com/accounts/register?next=/sota",
      "75.txt":
        "https://paperswithcode.com/accounts/register?next=/task/dota-2",
      "76.txt":
        "https://paperswithcode.com/accounts/register?next=/task/openai-gym",
      "77.txt": "https://paperswithcode.com/accounts/register?next=/trends",
      "78.txt": "https://paperswithcode.com/add-method",
      "79.txt": "https://paperswithcode.com/area/adversarial",
      "80.txt": "https://paperswithcode.com/area/audio",
      "81.txt": "https://paperswithcode.com/area/computer-code",
      "82.txt": "https://paperswithcode.com/area/computer-vision",
      "83.txt": "https://paperswithcode.com/area/graphs",
      "84.txt": "https://paperswithcode.com/area/knowledge-base",
      "85.txt": "https://paperswithcode.com/area/medical",
      "86.txt": "https://paperswithcode.com/area/methodology",
      "87.txt": "https://paperswithcode.com/area/miscellaneous",
      "88.txt": "https://paperswithcode.com/area/music",
      "89.txt": "https://paperswithcode.com/area/natural-language-processing",
      "90.txt": "https://paperswithcode.com/area/playing-games",
      "91.txt": "https://paperswithcode.com/area/reasoning",
      "92.txt": "https://paperswithcode.com/area/robots",
      "93.txt": "https://paperswithcode.com/area/speech",
      "94.txt": "https://paperswithcode.com/area/time-series",
      "95.txt": "https://paperswithcode.com/author/greg-brockman",
      "96.txt":
        "https://paperswithcode.com/cdn-cgi/l/email-protection#046c6168686b44746574617677736d706c676b60612a676b69",
      "97.txt":
        "https://paperswithcode.com/cdn-cgi/l/email-protection#14667164667b7061777d767d787d606d3a777c757878717a7371547379757d783a777b79",
      "98.txt":
        "https://paperswithcode.com/cdn-cgi/l/email-protection#2048454c4c4f6050415045525357495448434f44450e434f4d",
      "99.txt":
        "https://paperswithcode.com/cdn-cgi/l/email-protection#365e535a5a5976465746534445415f425e555952531855595b",
      "100.txt":
        "https://paperswithcode.com/cdn-cgi/l/email-protection#4129242d2d2e0131203124333236283529222e25246f222e2c",
      "101.txt":
        "https://paperswithcode.com/cdn-cgi/l/email-protection#4b232e2727240b3b2a3b2e39383c223f2328242f2e65282426",
      "102.txt":
        "https://paperswithcode.com/cdn-cgi/l/email-protection#563e333a3a3916263726332425213f223e353932337835393b",
      "103.txt":
        "https://paperswithcode.com/cdn-cgi/l/email-protection#58303d343437182839283d2a2b2f312c303b373c3d763b3735",
      "104.txt":
        "https://paperswithcode.com/cdn-cgi/l/email-protection#5b333e3737341b2b3a2b3e29282c322f3338343f3e75383436",
      "105.txt":
        "https://paperswithcode.com/cdn-cgi/l/email-protection#5f373a3333301f2f3e2f3a2d2c28362b373c303b3a713c3032",
      "106.txt":
        "https://paperswithcode.com/cdn-cgi/l/email-protection#7018151c1c1f3000110015020307190418131f14155e131f1d",
      "107.txt":
        "https://paperswithcode.com/cdn-cgi/l/email-protection#78101d141417380819081d0a0b0f110c101b171c1d561b1715",
      "108.txt":
        "https://paperswithcode.com/cdn-cgi/l/email-protection#7f171a1313103f0f1e0f1a0d0c08160b171c101b1a511c1012",
      "109.txt":
        "https://paperswithcode.com/cdn-cgi/l/email-protection#83ebe6efefecc3f3e2f3e6f1f0f4eaf7ebe0ece7e6ade0ecee",
      "110.txt":
        "https://paperswithcode.com/cdn-cgi/l/email-protection#8de5e8e1e1e2cdfdecfde8fffefae4f9e5eee2e9e8a3eee2e0",
      "111.txt":
        "https://paperswithcode.com/cdn-cgi/l/email-protection#b8d0ddd4d4d7f8c8d9c8ddcacbcfd1ccd0dbd7dcdd96dbd7d5",
      "112.txt":
        "https://paperswithcode.com/cdn-cgi/l/email-protection#b9d1dcd5d5d6f9c9d8c9dccbcaced0cdd1dad6dddc97dad6d4",
      "113.txt":
        "https://paperswithcode.com/cdn-cgi/l/email-protection#c1b3a4b1b3aea5b4a2a8a3a8ada8b5b8efa2a9a0adada4afa6a481a6aca0a8adefa2aeac",
      "114.txt":
        "https://paperswithcode.com/cdn-cgi/l/email-protection#d0b8b5bcbcbf90a0b1a0b5a2a3a7b9a4b8b3bfb4b5feb3bfbd",
      "115.txt":
        "https://paperswithcode.com/cdn-cgi/l/email-protection#d3bbb6bfbfbc93a3b2a3b6a1a0a4baa7bbb0bcb7b6fdb0bcbe",
      "116.txt":
        "https://paperswithcode.com/cdn-cgi/l/email-protection#ff979a939390bf8f9e8f9a8d8c88968b979c909b9ad19c9092",
      "117.txt": "https://paperswithcode.com/conference/cvpr-2020-6",
      "118.txt": "https://paperswithcode.com/conference/iclr-2021-1",
      "119.txt": "https://paperswithcode.com/conference/icml-2018-7",
      "120.txt": "https://paperswithcode.com/conference/neurips-2020-12",
      "121.txt": "https://paperswithcode.com/greatest",
      "122.txt": "https://paperswithcode.com/latest",
      "123.txt":
        "https://paperswithcode.com/media/about/evaluation-tables.json.gz",
      "124.txt":
        "https://paperswithcode.com/media/about/links-between-papers-and-code.json.gz",
      "125.txt": "https://paperswithcode.com/media/about/methods.json.gz",
      "126.txt":
        "https://paperswithcode.com/media/about/papers-with-abstracts.json.gz",
      "127.txt": "https://paperswithcode.com/methods",
      "128.txt": "https://paperswithcode.com/methods/area/audio",
      "129.txt": "https://paperswithcode.com/methods/area/computer-vision",
      "130.txt": "https://paperswithcode.com/methods/area/general",
      "131.txt": "https://paperswithcode.com/methods/area/graphs",
      "132.txt":
        "https://paperswithcode.com/methods/area/natural-language-processing",
      "133.txt":
        "https://paperswithcode.com/methods/area/reinforcement-learning",
      "134.txt": "https://paperswithcode.com/methods/area/sequential",
      "135.txt":
        "https://paperswithcode.com/methods/category/activation-functions",
      "136.txt":
        "https://paperswithcode.com/methods/category/attention-mechanisms",
      "137.txt":
        "https://paperswithcode.com/methods/category/audio-artifact-removal",
      "138.txt":
        "https://paperswithcode.com/methods/category/audio-model-blocks",
      "139.txt":
        "https://paperswithcode.com/methods/category/bidirectional-recurrent-neural-networks",
      "140.txt":
        "https://paperswithcode.com/methods/category/convolutional-neural-networks",
      "141.txt":
        "https://paperswithcode.com/methods/category/eligibility-traces",
      "142.txt":
        "https://paperswithcode.com/methods/category/factorized-attention",
      "143.txt":
        "https://paperswithcode.com/methods/category/generative-audio-models",
      "144.txt":
        "https://paperswithcode.com/methods/category/generative-models",
      "145.txt": "https://paperswithcode.com/methods/category/graph-embeddings",
      "146.txt": "https://paperswithcode.com/methods/category/graph-models",
      "147.txt":
        "https://paperswithcode.com/methods/category/image-feature-extractors",
      "148.txt":
        "https://paperswithcode.com/methods/category/image-model-blocks",
      "149.txt": "https://paperswithcode.com/methods/category/language-models",
      "150.txt": "https://paperswithcode.com/methods/category/normalization",
      "151.txt":
        "https://paperswithcode.com/methods/category/object-detection-models",
      "152.txt":
        "https://paperswithcode.com/methods/category/off-policy-td-control",
      "153.txt":
        "https://paperswithcode.com/methods/category/on-policy-td-control",
      "154.txt":
        "https://paperswithcode.com/methods/category/phase-reconstruction",
      "155.txt":
        "https://paperswithcode.com/methods/category/policy-gradient-methods",
      "156.txt": "https://paperswithcode.com/methods/category/q-learning",
      "157.txt":
        "https://paperswithcode.com/methods/category/recurrent-neural-networks",
      "158.txt": "https://paperswithcode.com/methods/category/regularization",
      "159.txt":
        "https://paperswithcode.com/methods/category/sequence-to-sequence-models",
      "160.txt":
        "https://paperswithcode.com/methods/category/stochastic-optimization",
      "161.txt":
        "https://paperswithcode.com/methods/category/synthesized-attention-mechanisms",
      "162.txt":
        "https://paperswithcode.com/methods/category/temporal-convolutions",
      "163.txt":
        "https://paperswithcode.com/methods/category/text-to-speech-models",
      "164.txt":
        "https://paperswithcode.com/methods/category/time-series-analysis",
      "165.txt": "https://paperswithcode.com/methods/category/transformers",
      "166.txt": "https://paperswithcode.com/methods/category/word-embeddings",
      "167.txt":
        "https://paperswithcode.com/paper/a-lip-sync-expert-is-all-you-need-for-speech",
      "168.txt":
        "https://paperswithcode.com/paper/a-lip-sync-expert-is-all-you-need-for-speech#code",
      "169.txt":
        "https://paperswithcode.com/paper/addressing-function-approximation-error-in",
      "170.txt":
        "https://paperswithcode.com/paper/addressing-function-approximation-error-in#code",
      "171.txt":
        "https://paperswithcode.com/paper/advantage-weighted-regression-simple-and",
      "172.txt":
        "https://paperswithcode.com/paper/advantage-weighted-regression-simple-and#code",
      "173.txt":
        "https://paperswithcode.com/paper/an-empirical-model-of-large-batch-training",
      "174.txt":
        "https://paperswithcode.com/paper/an-empirical-model-of-large-batch-training#code",
      "175.txt":
        "https://paperswithcode.com/paper/benchmark-environments-for-multitask-learning",
      "176.txt":
        "https://paperswithcode.com/paper/benchmark-environments-for-multitask-learning#code",
      "177.txt":
        "https://paperswithcode.com/paper/bindsnet-a-machine-learning-oriented-spiking",
      "178.txt":
        "https://paperswithcode.com/paper/bindsnet-a-machine-learning-oriented-spiking#code",
      "179.txt":
        "https://paperswithcode.com/paper/deep-reinforcement-learning-with-feedback",
      "180.txt":
        "https://paperswithcode.com/paper/deep-reinforcement-learning-with-feedback#code",
      "181.txt":
        "https://paperswithcode.com/paper/efficient-convnet-based-object-detection-for",
      "182.txt":
        "https://paperswithcode.com/paper/efficient-convnet-based-object-detection-for#code",
      "183.txt":
        "https://paperswithcode.com/paper/fastformers-highly-efficient-transformer",
      "184.txt":
        "https://paperswithcode.com/paper/fastformers-highly-efficient-transformer#code",
      "185.txt":
        "https://paperswithcode.com/paper/gym-gazebo2-a-toolkit-for-reinforcement",
      "186.txt":
        "https://paperswithcode.com/paper/gym-gazebo2-a-toolkit-for-reinforcement#code",
      "187.txt":
        "https://paperswithcode.com/paper/instance-aware-image-colorization",
      "188.txt":
        "https://paperswithcode.com/paper/instance-aware-image-colorization#code",
      "189.txt":
        "https://paperswithcode.com/paper/medmnist-classification-decathlon-a",
      "190.txt":
        "https://paperswithcode.com/paper/medmnist-classification-decathlon-a#code",
      "191.txt":
        "https://paperswithcode.com/paper/modular-primitives-for-high-performance",
      "192.txt":
        "https://paperswithcode.com/paper/modular-primitives-for-high-performance#code",
      "193.txt":
        "https://paperswithcode.com/paper/multi-agent-collaboration-via-reward-1",
      "194.txt":
        "https://paperswithcode.com/paper/multi-agent-collaboration-via-reward-1#code",
      "195.txt": "https://paperswithcode.com/paper/openai-gym",
      "196.txt": "https://paperswithcode.com/paper/openai-gym#code",
      "197.txt":
        "https://paperswithcode.com/paper/pifuhd-multi-level-pixel-aligned-implicit",
      "198.txt":
        "https://paperswithcode.com/paper/pifuhd-multi-level-pixel-aligned-implicit#code",
      "199.txt":
        "https://paperswithcode.com/paper/proximal-policy-optimization-algorithms",
      "200.txt":
        "https://paperswithcode.com/paper/proximal-policy-optimization-algorithms#code",
      "201.txt":
        "https://paperswithcode.com/paper/real-time-esports-match-result-prediction",
      "202.txt":
        "https://paperswithcode.com/paper/real-time-esports-match-result-prediction#code",
      "203.txt":
        "https://paperswithcode.com/paper/recbole-towards-a-unified-comprehensive-and",
      "204.txt":
        "https://paperswithcode.com/paper/recbole-towards-a-unified-comprehensive-and#code",
      "205.txt":
        "https://paperswithcode.com/paper/reinforcement-learning-with-augmented-data",
      "206.txt":
        "https://paperswithcode.com/paper/reinforcement-learning-with-augmented-data#code",
      "207.txt":
        "https://paperswithcode.com/paper/semi-supervised-medical-image-segmentation-1",
      "208.txt":
        "https://paperswithcode.com/paper/semi-supervised-medical-image-segmentation-1#code",
      "209.txt":
        "https://paperswithcode.com/paper/slm-lab-a-comprehensive-benchmark-and-modular-1",
      "210.txt":
        "https://paperswithcode.com/paper/slm-lab-a-comprehensive-benchmark-and-modular-1#code",
      "211.txt":
        "https://paperswithcode.com/paper/time-to-die-death-prediction-in-dota-2-using",
      "212.txt":
        "https://paperswithcode.com/paper/time-to-die-death-prediction-in-dota-2-using#code",
      "213.txt":
        "https://paperswithcode.com/paper/torchbeast-a-pytorch-platform-for-distributed",
      "214.txt":
        "https://paperswithcode.com/paper/torchbeast-a-pytorch-platform-for-distributed#code",
      "215.txt":
        "https://paperswithcode.com/paper/u-2-net-going-deeper-with-nested-u-structure",
      "216.txt":
        "https://paperswithcode.com/paper/u-2-net-going-deeper-with-nested-u-structure#code",
      "217.txt": "https://paperswithcode.com/rc2020",
      "218.txt": "https://paperswithcode.com/rc2020/faq",
      "219.txt": "https://paperswithcode.com/rc2020/registration",
      "220.txt": "https://paperswithcode.com/rc2020/resources",
      "221.txt": "https://paperswithcode.com/rc2020/task",
      "222.txt": "https://paperswithcode.com/site/cookies-policy",
      "223.txt": "https://paperswithcode.com/site/privacy",
      "224.txt": "https://paperswithcode.com/site/terms",
      "225.txt": "https://paperswithcode.com/sota",
      "226.txt":
        "https://paperswithcode.com/sota/3d-object-reconstruction-from-a-single-image",
      "227.txt": "https://paperswithcode.com/sota/lip-sync-on-lrw",
      "228.txt": "https://paperswithcode.com/sota/openai-gym-on-ant-v2",
      "229.txt": "https://paperswithcode.com/sota/openai-gym-on-halfcheetah-v2",
      "230.txt": "https://paperswithcode.com/sota/openai-gym-on-hopper-v2",
      "231.txt": "https://paperswithcode.com/sota/openai-gym-on-humanoid-v2",
      "232.txt": "https://paperswithcode.com/sota/openai-gym-on-lunarlander-v2",
      "233.txt": "https://paperswithcode.com/sota/openai-gym-on-walker2d-v2",
      "234.txt": "https://paperswithcode.com/task/3d-human-pose-estimation",
      "235.txt":
        "https://paperswithcode.com/task/3d-object-reconstruction-from-a-single-image",
      "236.txt": "https://paperswithcode.com/task/3d-shape-reconstruction",
      "237.txt":
        "https://paperswithcode.com/task/acoustic-scene-classification",
      "238.txt": "https://paperswithcode.com/task/adversarial-attack",
      "239.txt": "https://paperswithcode.com/task/adversarial-defense",
      "240.txt": "https://paperswithcode.com/task/adversarial-text",
      "241.txt": "https://paperswithcode.com/task/atari-games",
      "242.txt": "https://paperswithcode.com/task/audio-classification",
      "243.txt": "https://paperswithcode.com/task/audio-tagging",
      "244.txt": "https://paperswithcode.com/task/automl",
      "245.txt": "https://paperswithcode.com/task/brain-tumor-segmentation",
      "246.txt": "https://paperswithcode.com/task/causal-discovery",
      "247.txt": "https://paperswithcode.com/task/causal-inference",
      "248.txt": "https://paperswithcode.com/task/clustering",
      "249.txt": "https://paperswithcode.com/task/code-generation",
      "250.txt": "https://paperswithcode.com/task/colorization",
      "251.txt": "https://paperswithcode.com/task/common-sense-reasoning",
      "252.txt": "https://paperswithcode.com/task/community-detection",
      "253.txt": "https://paperswithcode.com/task/continual-learning",
      "254.txt": "https://paperswithcode.com/task/continuous-control",
      "255.txt": "https://paperswithcode.com/task/covid-19-detection",
      "256.txt": "https://paperswithcode.com/task/curriculum-learning",
      "257.txt": "https://paperswithcode.com/task/data-augmentation",
      "258.txt": "https://paperswithcode.com/task/data-poisoning",
      "259.txt": "https://paperswithcode.com/task/decision-making",
      "260.txt": "https://paperswithcode.com/task/dimensionality-reduction",
      "261.txt": "https://paperswithcode.com/task/domain-adaptation",
      "262.txt": "https://paperswithcode.com/task/dota-2",
      "263.txt": "https://paperswithcode.com/task/dota-2#code",
      "264.txt": "https://paperswithcode.com/task/dota-2/codeless#code",
      "265.txt": "https://paperswithcode.com/task/dota-2/latest#code",
      "266.txt": "https://paperswithcode.com/task/drug-discovery",
      "267.txt": "https://paperswithcode.com/task/feature-selection",
      "268.txt": "https://paperswithcode.com/task/federated-learning",
      "269.txt": "https://paperswithcode.com/task/gesture-recognition",
      "270.txt": "https://paperswithcode.com/task/graph-classification",
      "271.txt": "https://paperswithcode.com/task/graph-embedding",
      "272.txt": "https://paperswithcode.com/task/human-robot-interaction",
      "273.txt": "https://paperswithcode.com/task/image-classification",
      "274.txt": "https://paperswithcode.com/task/image-generation",
      "275.txt": "https://paperswithcode.com/task/imputation",
      "276.txt": "https://paperswithcode.com/task/inference-attack",
      "277.txt": "https://paperswithcode.com/task/knowledge-base-completion",
      "278.txt": "https://paperswithcode.com/task/knowledge-graph-completion",
      "279.txt": "https://paperswithcode.com/task/knowledge-graphs",
      "280.txt": "https://paperswithcode.com/task/language-modelling",
      "281.txt": "https://paperswithcode.com/task/lesion-segmentation",
      "282.txt": "https://paperswithcode.com/task/link-prediction",
      "283.txt": "https://paperswithcode.com/task/lip-sync",
      "284.txt": "https://paperswithcode.com/task/machine-translation",
      "285.txt": "https://paperswithcode.com/task/malware-detection",
      "286.txt":
        "https://paperswithcode.com/task/media/tasks/Screenshot_2019-11-28_at_22.32.37_LLnpgZM.png",
      "287.txt": "https://paperswithcode.com/task/medical-image-segmentation",
      "288.txt": "https://paperswithcode.com/task/minecraft",
      "289.txt": "https://paperswithcode.com/task/motion-planning",
      "290.txt":
        "https://paperswithcode.com/task/multi-agent-reinforcement-learning",
      "291.txt": "https://paperswithcode.com/task/multi-armed-bandits",
      "292.txt": "https://paperswithcode.com/task/music-classification",
      "293.txt": "https://paperswithcode.com/task/music-generation",
      "294.txt": "https://paperswithcode.com/task/music-information-retrieval",
      "295.txt": "https://paperswithcode.com/task/music-modeling",
      "296.txt": "https://paperswithcode.com/task/music-source-separation",
      "297.txt":
        "https://paperswithcode.com/task/natural-language-understanding",
      "298.txt": "https://paperswithcode.com/task/node-classification",
      "299.txt": "https://paperswithcode.com/task/object-detection",
      "300.txt": "https://paperswithcode.com/task/openai-gym",
      "301.txt": "https://paperswithcode.com/task/openai-gym#code",
      "302.txt": "https://paperswithcode.com/task/openai-gym/codeless#code",
      "303.txt": "https://paperswithcode.com/task/openai-gym/latest#code",
      "304.txt": "https://paperswithcode.com/task/openai-gym?page=2",
      "305.txt": "https://paperswithcode.com/task/policy-gradient-methods",
      "306.txt": "https://paperswithcode.com/task/pose-estimation",
      "307.txt": "https://paperswithcode.com/task/program-synthesis",
      "308.txt": "https://paperswithcode.com/task/q-learning",
      "309.txt": "https://paperswithcode.com/task/question-answering",
      "310.txt": "https://paperswithcode.com/task/recommendation-systems",
      "311.txt": "https://paperswithcode.com/task/representation-learning",
      "312.txt": "https://paperswithcode.com/task/salient-object-detection",
      "313.txt": "https://paperswithcode.com/task/semantic-segmentation",
      "314.txt": "https://paperswithcode.com/task/sentiment-analysis",
      "315.txt": "https://paperswithcode.com/task/sound-event-detection",
      "316.txt": "https://paperswithcode.com/task/speaker-verification",
      "317.txt": "https://paperswithcode.com/task/speech-enhancement",
      "318.txt": "https://paperswithcode.com/task/speech-recognition",
      "319.txt": "https://paperswithcode.com/task/speech-synthesis",
      "320.txt": "https://paperswithcode.com/task/starcraft",
      "321.txt": "https://paperswithcode.com/task/starcraft-ii",
      "322.txt": "https://paperswithcode.com/task/temporal-logic",
      "323.txt": "https://paperswithcode.com/task/text-generation",
      "324.txt": "https://paperswithcode.com/task/time-series",
      "325.txt": "https://paperswithcode.com/task/time-series-classification",
      "326.txt": "https://paperswithcode.com/task/time-series-forecasting",
      "327.txt": "https://paperswithcode.com/task/topic-models",
      "328.txt": "https://paperswithcode.com/task/transfer-learning",
      "329.txt":
        "https://paperswithcode.com/task/transfer-reinforcement-learning",
      "330.txt": "https://paperswithcode.com/task/variational-inference",
      "331.txt": "https://paperswithcode.com/task/video-games",
      "332.txt": "https://paperswithcode.com/task/visual-odometry",
      "333.txt": "https://paperswithcode.com/task/visual-reasoning",
      "334.txt": "https://paperswithcode.com/task/voice-conversion",
      "335.txt": "https://paperswithcode.com/task/word-embeddings",
      "336.txt": "https://paperswithcode.com/trends",
      "337.txt":
        "https://paperswithcode.slack.com/join/shared_invite/enQtNTI3NDE2NjQ0ODM0LTdmNzNjODkwOGY0MjU4YzgzNDZhNGM1YWIzYmZhNzk5MTFkYWU4YWNjN2JjZDhlNjJiYjFkYjYwNjkzYzdiZDk",
      "338.txt":
        "https://paperswithcode.slack.com/join/shared_invite/zt-f3dj9aaf-ypjgzwiDF4EonhL~IcFVBw",
      "339.txt": "https://rajpurkar.github.io/SQuAD-explorer/",
      "340.txt": "https://reproducibility-challenge.github.io/neurips2019/",
      "341.txt": "https://rescience.github.io/",
      "342.txt": "https://rescience.github.io/read/#volume-5-2019",
      "343.txt": "https://rescience.github.io/read/#volume-6-2020",
      "344.txt": "https://sites.google.com/view/ift6268-a2020",
      "345.txt":
        "https://studiegids.uva.nl/xmlpages/page/2019-2020-en/search-course/course/73565",
      "346.txt":
        "https://support.cloudflare.com/hc/en-us/articles/200170016-What-is-Email-Address-Obfuscation-",
      "347.txt":
        "https://support.cloudflare.com/hc/en-us/categories/200275218-Getting-Started",
      "348.txt": "https://twitter.com/LudovicViaud",
      "349.txt": "https://twitter.com/ViktorKerkez",
      "350.txt": "https://twitter.com/misterkardas",
      "351.txt": "https://twitter.com/opensearch.xml",
      "352.txt": "https://twitter.com/paperswithcode",
      "353.txt": "https://twitter.com/paperswithcode?lang=ar",
      "354.txt": "https://twitter.com/paperswithcode?lang=bg",
      "355.txt": "https://twitter.com/paperswithcode?lang=bn",
      "356.txt": "https://twitter.com/paperswithcode?lang=ca",
      "357.txt": "https://twitter.com/paperswithcode?lang=cs",
      "358.txt": "https://twitter.com/paperswithcode?lang=da",
      "359.txt": "https://twitter.com/paperswithcode?lang=de",
      "360.txt": "https://twitter.com/paperswithcode?lang=el",
      "361.txt": "https://twitter.com/paperswithcode?lang=en",
      "362.txt": "https://twitter.com/paperswithcode?lang=en-GB",
      "363.txt": "https://twitter.com/paperswithcode?lang=es",
      "364.txt": "https://twitter.com/paperswithcode?lang=eu",
      "365.txt": "https://twitter.com/paperswithcode?lang=fa",
      "366.txt": "https://twitter.com/paperswithcode?lang=fi",
      "367.txt": "https://twitter.com/paperswithcode?lang=fr",
      "368.txt": "https://twitter.com/paperswithcode?lang=ga",
      "369.txt": "https://twitter.com/paperswithcode?lang=gl",
      "370.txt": "https://twitter.com/paperswithcode?lang=gu",
      "371.txt": "https://twitter.com/paperswithcode?lang=he",
      "372.txt": "https://twitter.com/paperswithcode?lang=hi",
      "373.txt": "https://twitter.com/paperswithcode?lang=hr",
      "374.txt": "https://twitter.com/paperswithcode?lang=hu",
      "375.txt": "https://twitter.com/paperswithcode?lang=id",
      "376.txt": "https://twitter.com/paperswithcode?lang=it",
      "377.txt": "https://twitter.com/paperswithcode?lang=ja",
      "378.txt": "https://twitter.com/paperswithcode?lang=kn",
      "379.txt": "https://twitter.com/paperswithcode?lang=ko",
      "380.txt": "https://twitter.com/paperswithcode?lang=mr",
      "381.txt": "https://twitter.com/paperswithcode?lang=ms",
      "382.txt": "https://twitter.com/paperswithcode?lang=nb",
      "383.txt": "https://twitter.com/paperswithcode?lang=nl",
      "384.txt": "https://twitter.com/paperswithcode?lang=pl",
      "385.txt": "https://twitter.com/paperswithcode?lang=pt",
      "386.txt": "https://twitter.com/paperswithcode?lang=ro",
      "387.txt": "https://twitter.com/paperswithcode?lang=ru",
      "388.txt": "https://twitter.com/paperswithcode?lang=sk",
      "389.txt": "https://twitter.com/paperswithcode?lang=sr",
      "390.txt": "https://twitter.com/paperswithcode?lang=sv",
      "391.txt": "https://twitter.com/paperswithcode?lang=ta",
      "392.txt": "https://twitter.com/paperswithcode?lang=th",
      "393.txt": "https://twitter.com/paperswithcode?lang=tl",
      "394.txt": "https://twitter.com/paperswithcode?lang=tr",
      "395.txt": "https://twitter.com/paperswithcode?lang=uk",
      "396.txt": "https://twitter.com/paperswithcode?lang=ur",
      "397.txt": "https://twitter.com/paperswithcode?lang=vi",
      "398.txt": "https://twitter.com/paperswithcode?lang=zh",
      "399.txt": "https://twitter.com/paperswithcode?lang=zh-Hant",
      "400.txt": "https://twitter.com/rbstojnic",
      "401.txt": "https://twitter.com/rosstaylor90",
      "402.txt": "https://www.brown.edu/",
      "403.txt": "https://www.cloudflare.com/5xx-error-landing",
      "404.txt":
        "https://www.cloudflare.com/sign-up?utm_source=email_protection",
      "405.txt": "https://www.cs.mcgill.ca/",
      "406.txt":
        "https://www.cs.mcgill.ca/~jpineau/ICLR2018-ReproducibilityChallenge.html",
      "407.txt":
        "https://www.cs.mcgill.ca/~jpineau/ICLR2019-ReproducibilityChallenge.html",
      "408.txt": "https://www.epfl.ch/en/",
      "409.txt": "https://www.epfl.ch/labs/mlo/machine-learning-cs-433/",
      "410.txt": "https://www.epita.fr/en/",
      "411.txt": "https://www.siamak.page/teachings/comp551f20/comp551f20/",
      "412.txt": "https://www.umontreal.ca/",
      "413.txt": "https://www.uva.nl/en?cb",
    };
    // console.log("this.state.data", this.state.data)
    const { classes } = this.props;
    return (
      <>
        <GridContainer justify="center">
          {/* <div className={classes.title}>
                  <h2>Búsqueda</h2>
                </div> */}
          {_.map([...this.state.data.entries()], (entity, key) => {
            console.log("entity", entity);
            var doc = entity[0];
            return (
              <GridItem
                key={key}
                xs={12}
                sm={12}
                md={12}
                style={{
                  padding: "5px 5px 5px",
                }}
              >
                <Card className={classes.root}>
                  <CardHeader title={"Documento encontrado en " + entity[0] } />
                  
                  
                  
                  {/* {doc != undefined?
                  <ReactTinyLink
                  cardSize="small"
                  showGraphic={true}
                  maxLine={2}
                  minLine={1}
                  url={ "https://www.cloudflare.com/5xx-error-landing"}
                  />
                :null} */}

                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <a href={links.doc}>link</a><br></br>
                      Ranking {entity[1]}
                    </Typography>
                  </CardContent>
                 
                </Card>
              </GridItem>
            );
          })}

          {this.state.data.length === 0 ? (
            <Typography paragraph>No se encontraron resultados</Typography>
          ) : null}
        </GridContainer>
      </>
    );
  }
}

export default withStyles(useStyles)(Resultado);
