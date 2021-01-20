

// init counter
var counter = 1

function createWrapper(cellData) {
  let wrapper = document.createElement("div")
  wrapper.classList.add('cell-wrapper')
  wrapper.addEventListener("click", e => {
    // alert("clicked")
    // console.log(cellData.path)
    window.open(`https://cloudinary.com/documentation/transformation_reference#${cellData.path}`, '_blank');

  })
  return wrapper

}
function createCell(cellData) {
  const newCell = document.createElement("td")
  let wrapper = createWrapper(cellData)

  if (cellData.border === true) {

    //number
    const num = document.createElement("p")
    num.innerHTML = `${counter++}`
    num.classList.add("num")
    wrapper.appendChild(num)

    //symbol 
    const h3 = document.createElement("h3")
    h3.innerHTML = cellData.symbol ? cellData.symbol : " "
    wrapper.appendChild(h3)
    //line1
    const p = document.createElement("p")

    p.innerHTML = cellData.line1 ? cellData.line1 : " "
    wrapper.appendChild(p)
    //line2
    const p2 = document.createElement("p")
    p2.innerHTML = cellData.line2 ? cellData.line2 : " "
    wrapper.appendChild(p2)

    if (cellData.type === 'effect' || cellData.type === 'resize') {
      p.classList.add('xsmall-desc')
      p2.classList.add('xsmall-desc')
    }
  }

  if (cellData.type) {
    wrapper.classList.add(cellData.type)
  }

  newCell.appendChild(wrapper)
  return newCell
}
function createRow(rowData) {
  const newRow = document.createElement("tr")
  rowData.forEach(row => {
    let newCell = createCell(row)
    row.border === true ? newCell.classList.add('with-bo') : null
    newRow.appendChild(newCell)
  })
  // for (let i = 0; i < 18; i++) {
  //   let newCell = createCell(rowData[i])
  //   rowData[i].border === true ? newCell.classList.add('with-bo') : null

  //   newRow.appendChild(newCell)
  // }
  return newRow


}

document.addEventListener("DOMContentLoaded", e => {
  const table = document.querySelector("#periodic")
  let rowData = [
    [
      {
        "num": 1,
        "FIELD2": "fn (custom function)",
        "abbrev": "fn",
        "symbol": "Fn",
        "line1": "custom",
        "line2": "function",
        "path": "fn_custom_function",
        "type": "custom",
        "border": true
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": 2,
        "FIELD2": "p (prefix)",
        "abbrev": "p",
        "symbol": "P",
        "line1": "prefix",
        "line2": "p_",
        "path": "p_prefix",
        "type": "sprite",
        "border": true
      }
    ],
    [
      {
        "num": 3,
        "FIELD2": "ac (audio codec)",
        "abbrev": "ac",
        "symbol": "Ac",
        "line1": "audio codec",
        "line2": "ac_",
        "path": "ac_audio_codec",
        "type": "audio",
        "border": true
      },
      {
        "num": 4,
        "FIELD2": "af (audio frequency)",
        "abbrev": "af",
        "symbol": "Af",
        "line1": "audio freq",
        "line2": "af_",
        "path": "af_audio_frequency",
        "type": "audio",
        "border": true
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": 5,
        "FIELD2": "a (angle)",
        "abbrev": "a",
        "symbol": "A",
        "line1": "angle",
        "line2": "a_",
        "path": "a_angle",
        "type": "aesthetic",
        "border": true
      },
      {
        "num": 6,
        "FIELD2": "fl (flag)",
        "abbrev": "fl",
        "symbol": "Fl",
        "line1": "flag",
        "line2": "fl_",
        "path": "fl_flage",
        "type": "aesthetic",
        "border": true
      },
      {
        "num": 7,
        "FIELD2": "o (opacity)",
        "abbrev": "op",
        "symbol": "Op",
        "line1": "opacity",
        "line2": "o_",
        "path": "o_opacity",
        "type": "aesthetic",
        "border": true
      },
      {
        "num": 8,
        "FIELD2": "if (if condition)",
        "abbrev": "if",
        "symbol": "If",
        "line1": "if condition",
        "line2": "if_",
        "path": "if_if_condition",
        "type": "template",
        "border": true
      },
      {
        "num": 9,
        "FIELD2": "t (named transformation)",
        "abbrev": "t",
        "symbol": "T",
        "line1": "named trans",
        "line2": "t_",
        "path": "t_named_transformation",
        "type": "template",
        "border": true
      },
      {
        "num": 10,
        "FIELD2": "$ (variable)",
        "abbrev": "$",
        "symbol": "$",
        "line1": "variable",
        "line2": "$<var>_",
        "path": "_variable",
        "type": "template",
        "border": true
      }
    ],
    [
      {
        "num": 11,
        "FIELD2": "b (background)",
        "abbrev": "b",
        "symbol": "B",
        "line1": "background",
        "line2": "b_",
        "path": "b_background",
        "type": "style",
        "border": true
      },
      {
        "num": 12,
        "FIELD2": "bo (border)",
        "abbrev": "bo",
        "symbol": "Bo",
        "line1": "border",
        "line2": "bo_",
        "path": "bo_border",
        "type": "style",
        "border": true
      },
      {
        "num": 13,
        "FIELD2": "co (color)",
        "abbrev": "co",
        "symbol": "Co",
        "line1": "color",
        "line2": "co_",
        "path": "co_color",
        "type": "style",
        "border": true
      },
      {
        "num": 14,
        "FIELD2": "cs (color space)",
        "abbrev": "cs",
        "symbol": "Cs",
        "line1": "color space",
        "line2": "cs_",
        "path": "cs_color_space",
        "type": "style",
        "border": true
      },
      {
        "num": 15,
        "FIELD2": "r (round corners)",
        "abbrev": "r",
        "symbol": "R",
        "line1": "radius",
        "line2": "r_",
        "path": "r_round_corners",
        "type": "style",
        "border": true
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": null,
        "FIELD2": "",
        "abbrev": "",
        "symbol": "",
        "line1": "",
        "line2": "",
        "path": "",
        "type": "",
        "border": false
      },
      {
        "num": 16,
        "FIELD2": "f (format)",
        "abbrev": "f",
        "symbol": "F",
        "line1": "format",
        "line2": "f_",
        "path": "f_format",
        "type": "optimization",
        "border": true
      },
      {
        "num": 17,
        "FIELD2": "q (quality)",
        "abbrev": "q",
        "symbol": "Q",
        "line1": "quality",
        "line2": "q_",
        "path": "q_quality",
        "type": "optimization",
        "border": true
      },
      {
        "num": 18,
        "FIELD2": "dpr (DPR)",
        "abbrev": "dr",
        "symbol": "Dr",
        "line1": "dpr",
        "line2": "dpr_",
        "path": "dpr_dpr",
        "type": "optimization",
        "border": true
      },
      {
        "num": 19,
        "FIELD2": "g (gravity)",
        "abbrev": "g",
        "symbol": "G",
        "line1": "gravity",
        "line2": "g_",
        "path": "g_gravity",
        "type": "attention",
        "border": true
      },
      {
        "num": 20,
        "FIELD2": "z (zoom)",
        "abbrev": "z",
        "symbol": "Z",
        "line1": "zoom",
        "line2": "z_",
        "path": "z_zoom",
        "type": "attention",
        "border": true
      },
      {
        "num": 21,
        "FIELD2": "pg (page or file layer)",
        "abbrev": "pg",
        "symbol": "Pg",
        "line1": "pg",
        "line2": "pg_",
        "path": "pg_page_or_file_layer",
        "type": "photoshop",
        "border": true
      }
    ],
    [
      {
        "num": 22,
        "FIELD2": "l (layer)",
        "abbrev": "la",
        "symbol": "La",
        "line1": "layer",
        "line2": "l_",
        "path": "l_layer",
        "type": "layer",
        "border": true
      },
      {
        "num": 23,
        "FIELD2": "u (underlay)",
        "abbrev": "un",
        "symbol": "Un",
        "line1": "underlay",
        "line2": "u_",
        "path": "u_layer",
        "type": "layer",
        "border": true
      },
      {
        "num": 24,
        "FIELD2": "x",
        "abbrev": "x",
        "symbol": "X",
        "line1": "x",
        "line2": "x_",
        "path": "x_y_coordinates",
        "type": "layer",
        "border": true
      },
      {
        "num": 25,
        "FIELD2": "y",
        "abbrev": "y",
        "symbol": "Y",
        "line1": "y",
        "line2": "y_",
        "path": "x_y_coordinates",
        "type": "layer",
        "border": true
      },
      {
        "num": 26,
        "FIELD2": "font family",
        "abbrev": "ff",
        "symbol": "Ff",
        "line1": "font family",
        "line2": "ariel_",
        "path": "l_text",
        "type": "layer",
        "border": true
      },
      {
        "num": 27,
        "FIELD2": "font size",
        "abbrev": "fs",
        "symbol": "Fs",
        "line1": "font size",
        "line2": "_<n>: | _<n>_",
        "path": "l_text",
        "type": "layer",
        "border": true
      },
      {
        "num": 28,
        "FIELD2": "font weight",
        "abbrev": "fw",
        "symbol": "Fw",
        "line1": "font weight",
        "line2": "_bold",
        "path": "l_text",
        "type": "layer",
        "border": true
      },
      {
        "num": 29,
        "FIELD2": "text",
        "abbrev": "tx",
        "symbol": "Tx",
        "line1": "text",
        "line2": ":abc",
        "path": "l_text",
        "type": "layer",
        "border": true
      },
      {
        "num": 30,
        "FIELD2": "eo (end offset)",
        "abbrev": "eo",
        "symbol": "Eo",
        "line1": "end offset",
        "line2": "eo_",
        "path": "eo_end_offset",
        "type": "video-audio",
        "border": true
      },
           {
        "num": 33,
        "FIELD2": "du (duration)",
        "abbrev": "du",
        "symbol": "Du",
        "line1": "duration",
        "line2": "du_",
        "path": "du_duratoin",
        "type": "video-audio",
        "border": true
      },
       {
        "num": 36,
        "FIELD2": "so (start offset)",
        "abbrev": "so",
        "symbol": "So",
        "line1": "start offset",
        "line2": "so_",
        "path": "so_start_offset",
        "type": "video-audio",
        "border": true
      },
      {
        "num": 31,
        "FIELD2": "br (bitrate)",
        "abbrev": "br",
        "symbol": "Br",
        "line1": "bit reate",
        "line2": "br_",
        "path": "br_bitrate",
        "type": "video",
        "border": true
      },
      {
        "num": 32,
        "FIELD2": "dl (delay)",
        "abbrev": "dl",
        "symbol": "Dl",
        "line1": "delay",
        "line2": "dl_",
        "path": "dl_delay",
        "type": "video",
        "border": true
      },
 
      {
        "num": 34,
        "FIELD2": "fps (FPS)",
        "abbrev": "fp",
        "symbol": "Fp",
        "line1": "frames/sec",
        "line2": "fps_",
        "path": "fps_fps",
        "type": "video",
        "border": true
      },
      {
        "num": 35,
        "FIELD2": "ki (keyframe interval)",
        "abbrev": "ki",
        "symbol": "Ki",
        "line1": "keyframe int.",
        "line2": "ki_",
        "path": "ki_keyframe_interval",
        "type": "video",
        "border": true
      },
     
      {
        "num": 37,
        "FIELD2": "sp (streaming profile)",
        "abbrev": "sp",
        "symbol": "Sp",
        "line1": "stream profile",
        "line2": "sp_",
        "path": "sp_streaming_profile",
        "type": "video",
        "border": true
      },
      {
        "num": 38,
        "FIELD2": "vc (video codec)",
        "abbrev": "vc",
        "symbol": "Vc",
        "line1": "video codec",
        "line2": "vc_",
        "path": "vc_video_codec",
        "type": "video",
        "border": true
      },
      {
        "num": 39,
        "FIELD2": "vs (video sampling)",
        "abbrev": "vs",
        "symbol": "Vs",
        "line1": "vid. sample",
        "line2": "vs_",
        "path": "vs_video_sample",
        "type": "video",
        "border": true
      }
    ],
    [
      {
        "num": 40,
        "FIELD2": "accelerate",
        "abbrev": "aa",
        "symbol": "Aa",
        "line1": "accelerate",
        "line2": "e_accelerate:",
        "path": "e_accelerate",
        "type": "effect",
        "border": true
      },
      {
        "num": 41,
        "FIELD2": "adv_redeye",
        "abbrev": "ay",
        "symbol": "Ay",
        "line1": "adv redeye",
        "line2": "e_adv_redeye:",
        "path": "e_adv_redeye",
        "type": "effect",
        "border": true
      },
      {
        "num": 42,
        "FIELD2": "anti_removal",
        "abbrev": "av",
        "symbol": "Av",
        "line1": "anti removal",
        "line2": "e_anti_removal:",
        "path": "e_anti_removal",
        "type": "effect",
        "border": true
      },
      {
        "num": 43,
        "FIELD2": "art",
        "abbrev": "at",
        "symbol": "At",
        "line1": "art",
        "line2": "e_art:",
        "path": "e_art",
        "type": "effect",
        "border": true
      },
      {
        "num": 44,
        "FIELD2": "auto_brightness",
        "abbrev": "au",
        "symbol": "Au",
        "line1": "auto brightness",
        "line2": "e_auto_brightness:",
        "path": "e_auto_brightness",
        "type": "effect",
        "border": true
      },
      {
        "num": 45,
        "FIELD2": "auto_color",
        "abbrev": "al",
        "symbol": "Al",
        "line1": "auto color",
        "line2": "e_auto_color:",
        "path": "e_auto_color",
        "type": "effect",
        "border": true
      },
      {
        "num": 46,
        "FIELD2": "auto_contrast",
        "abbrev": "as",
        "symbol": "As",
        "line1": "auto contrast",
        "line2": "e_auto_contrast:",
        "path": "e_auto_contrast",
        "type": "effect",
        "border": true
      },
      {
        "num": 47,
        "FIELD2": "assist_colorblind",
        "abbrev": "ab",
        "symbol": "Ab",
        "line1": "colorblind",
        "line2": "e_assist_colorblind:",
        "path": "e_assist_colorblind",
        "type": "effect",
        "border": true
      },
      {
        "num": 48,
        "FIELD2": "bgremoval",
        "abbrev": "bg",
        "symbol": "Bg",
        "line1": "background removal",
        "line2": "e_bgremoval:",
        "path": "e_bgremoval",
        "type": "effect",
        "border": true
      },
      {
        "num": 49,
        "FIELD2": "blackwhite",
        "abbrev": "bw",
        "symbol": "Bw",
        "line1": "blackwhite",
        "line2": "e_blackwhite:",
        "path": "e_blackwhite",
        "type": "effect",
        "border": true
      },
      {
        "num": 50,
        "FIELD2": "blue",
        "abbrev": "bl",
        "symbol": "Bl",
        "line1": "blue",
        "line2": "e_blue:",
        "path": "e_blue",
        "type": "effect",
        "border": true
      },
      {
        "num": 51,
        "FIELD2": "blur",
        "abbrev": "bu",
        "symbol": "Bu",
        "line1": "blur",
        "line2": "e_blur:",
        "path": "e_blur",
        "type": "effect",
        "border": true
      },
      {
        "num": 52,
        "FIELD2": "blur_faces",
        "abbrev": "bf",
        "symbol": "Bf",
        "line1": "blur faces",
        "line2": "e_blur_faces:",
        "path": "e_blur_faces",
        "type": "effect",
        "border": true
      },
      {
        "num": 53,
        "FIELD2": "blur_region",
        "abbrev": "bn",
        "symbol": "Bn",
        "line1": "blur region",
        "line2": "e_blur_region:",
        "path": "e_blur_region",
        "type": "effect",
        "border": true
      },
      {
        "num": 54,
        "FIELD2": "boomerang",
        "abbrev": "bm",
        "symbol": "Bm",
        "line1": "boomerang",
        "line2": "e_boomerang",
        "path": "e_boomerang",
        "type": "effect",
        "border": true
      },
      {
        "num": 55,
        "FIELD2": "brightness",
        "abbrev": "bg",
        "symbol": "Bg",
        "line1": "brightness",
        "line2": "e_brightness:",
        "path": "e_brightness",
        "type": "effect",
        "border": true
      },
      {
        "num": 56,
        "FIELD2": "brightness_hsb",
        "abbrev": "bh",
        "symbol": "Bh",
        "line1": "brightness hsb",
        "line2": "e_brightness_hsb:",
        "path": "e_brightness_hsb",
        "type": "effect",
        "border": true
      },
      {
        "num": 57,
        "FIELD2": "cartoonify",
        "abbrev": "ca",
        "symbol": "Ca",
        "line1": "cartoonify",
        "line2": "e_cartoonify",
        "path": "e_cartoonify",
        "type": "effect",
        "border": true
      }
    ],
    [
      {
        "num": 58,
        "FIELD2": "colorize",
        "abbrev": "cz",
        "symbol": "Cz",
        "line1": "colorize",
        "line2": "e_colorize",
        "path": "e_colorize",
        "type": "effect",
        "border": true
      },
      {
        "num": 59,
        "FIELD2": "contrast",
        "abbrev": "cn",
        "symbol": "Cn",
        "line1": "contrast",
        "line2": "e_contrast",
        "path": "e_contrast",
        "type": "effect",
        "border": true
      },
      {
        "num": 60,
        "FIELD2": "cut_out",
        "abbrev": "cu",
        "symbol": "Cu",
        "line1": "cut out",
        "line2": "e_cut_out",
        "path": "e_cut_out",
        "type": "effect",
        "border": true
      },
      {
        "num": 61,
        "FIELD2": "deshake",
        "abbrev": "de",
        "symbol": "De",
        "line1": "deshake",
        "line2": "e_deshake",
        "path": "e_deshake",
        "type": "effect",
        "border": true
      },
      {
        "num": 62,
        "FIELD2": "distort",
        "abbrev": "di",
        "symbol": "Di",
        "line1": "distort",
        "line2": "e_distort",
        "path": "e_distort",
        "type": "effect",
        "border": true
      },
      {
        "num": 63,
        "FIELD2": "displace",
        "abbrev": "dp",
        "symbol": "Dp",
        "line1": "displace",
        "line2": "e_displace::::::::",
        "path": "e_displace",
        "type": "effect",
        "border": true
      },
      {
        "num": 64,
        "FIELD2": "fade",
        "abbrev": "fa",
        "symbol": "Fa",
        "line1": "fade",
        "line2": "e_fade",
        "path": "e_fade",
        "type": "effect",
        "border": true
      },
      {
        "num": 65,
        "FIELD2": "fill_light",
        "abbrev": "fg",
        "symbol": "Fg",
        "line1": "fill light",
        "line2": "e_fill_light",
        "path": "e_fill_light",
        "type": "effect",
        "border": true
      },
      {
        "num": 66,
        "FIELD2": "gamma",
        "abbrev": "ga",
        "symbol": "Ga",
        "line1": "gamma",
        "line2": "e_gamma",
        "path": "e_gamma",
        "type": "effect",
        "border": true
      },
      {
        "num": 67,
        "FIELD2": "gradient_fade",
        "abbrev": "gr",
        "symbol": "Gr",
        "line1": "gradient_fade",
        "line2": "e_gradient_fade",
        "path": "e_gradient_fade",
        "type": "effect",
        "border": true
      },
      {
        "num": 68,
        "FIELD2": "grayscale",
        "abbrev": "gy",
        "symbol": "Gy",
        "line1": "grayscale",
        "line2": "e_grayscale",
        "path": "e_grayscale",
        "type": "effect",
        "border": true
      },
      {
        "num": 69,
        "FIELD2": "green",
        "abbrev": "ge",
        "symbol": "Ge",
        "line1": "green",
        "line2": "e_green",
        "path": "e_green",
        "type": "effect",
        "border": true
      },
      {
        "num": 70,
        "FIELD2": "hue",
        "abbrev": "hu",
        "symbol": "Hu",
        "line1": "hue",
        "line2": "e_hue",
        "path": "e_hue",
        "type": "effect",
        "border": true
      },
      {
        "num": 71,
        "FIELD2": "improve",
        "abbrev": "im",
        "symbol": "Im",
        "line1": "improve",
        "line2": "e_improve",
        "path": "e_improve",
        "type": "effect",
        "border": true
      },
      {
        "num": 72,
        "FIELD2": "lightroom",
        "abbrev": "li",
        "symbol": "Li",
        "line1": "lightroom",
        "line2": "e_lightroom:",
        "path": "e_lightroom",
        "type": "effect",
        "border": true
      },
      {
        "num": 73,
        "FIELD2": "loop",
        "abbrev": "lo",
        "symbol": "Lo",
        "line1": "loop",
        "line2": "e_loop",
        "path": "e_loop",
        "type": "effect",
        "border": true
      },
      {
        "num": 74,
        "FIELD2": "make_transparent",
        "abbrev": "mt",
        "symbol": "Mt",
        "line1": "make transparent",
        "line2": "e_make_transparent",
        "path": "e_make_transparent",
        "type": "effect",
        "border": true
      },
      {
        "num": 75,
        "FIELD2": "multiply",
        "abbrev": "mu",
        "symbol": "Mu",
        "line1": "multiply",
        "line2": "e_multiply",
        "path": "e_multiply",
        "type": "effect",
        "border": true
      }
    ],
    [
      {
        "num": 76,
        "FIELD2": "negate",
        "abbrev": "be",
        "symbol": "Be",
        "line1": "negate",
        "line2": "e_negate",
        "path": "e_negate",
        "type": "effect",
        "border": true
      },
      {
        "num": 77,
        "FIELD2": "noise",
        "abbrev": "no",
        "symbol": "No",
        "line1": "noise",
        "line2": "e_noise",
        "path": "e_noise",
        "type": "effect",
        "border": true
      },
      {
        "num": 78,
        "FIELD2": "oil_paint",
        "abbrev": "oi",
        "symbol": "Oi",
        "line1": "oil paint",
        "line2": "e_oil_paint",
        "path": "e_oli_paint",
        "type": "effect",
        "border": true
      },
      {
        "num": 79,
        "FIELD2": "opacity_threshold",
        "abbrev": "ot",
        "symbol": "Ot",
        "line1": "opacity threshold",
        "line2": "e_opacity_threshold",
        "path": "e_opacity_threshold",
        "type": "effect",
        "border": true
      },
      {
        "num": 80,
        "FIELD2": "ordered_dither",
        "abbrev": "or",
        "symbol": "Or",
        "line1": "ordered dither",
        "line2": "e_ordered_dither",
        "path": "e_ordered_dither",
        "type": "effect",
        "border": true
      },
      {
        "num": 81,
        "FIELD2": "outline",
        "abbrev": "ou",
        "symbol": "Ou",
        "line1": "outline",
        "line2": "e_outline",
        "path": "e_outline",
        "type": "effect",
        "border": true
      },
      {
        "num": 82,
        "FIELD2": "overlay",
        "abbrev": "ov",
        "symbol": "Ov",
        "line1": "overlay",
        "line2": "e_overlay",
        "path": "e_overlay",
        "type": "effect",
        "border": true
      },
      {
        "num": 83,
        "FIELD2": "pixelate",
        "abbrev": "pi",
        "symbol": "Pi",
        "line1": "pixelate",
        "line2": "e_pixelate",
        "path": "e_pixelate",
        "type": "effect",
        "border": true
      },
      {
        "num": 84,
        "FIELD2": "pixelate_faces",
        "abbrev": "pf",
        "symbol": "Pf",
        "line1": "pixelate faces",
        "line2": "e_pixelate_faces",
        "path": "e_pixelate_faces",
        "type": "effect",
        "border": true
      },
      {
        "num": 85,
        "FIELD2": "pixelate_region",
        "abbrev": "pr",
        "symbol": "Pr",
        "line1": "pixelate region",
        "line2": "e_pixelate_region",
        "path": "e_pixelate_region",
        "type": "effect",
        "border": true
      },
      {
        "num": 86,
        "FIELD2": "preview",
        "abbrev": "pv",
        "symbol": "Pv",
        "line1": "preview",
        "line2": "e_preview",
        "path": "e_preview",
        "type": "effect",
        "border": true
      },
      {
        "num": 87,
        "FIELD2": "progressbar",
        "abbrev": "po",
        "symbol": "Po",
        "line1": "progress bar",
        "line2": "e_progressbar",
        "path": "e_progressbar",
        "type": "effect",
        "border": true
      },
      {
        "num": 88,
        "FIELD2": "recolor",
        "abbrev": "re",
        "symbol": "Re",
        "line1": "recolor",
        "line2": "e_recolor",
        "path": "e_recolor",
        "type": "effect",
        "border": true
      },
      {
        "num": 89,
        "FIELD2": "red",
        "abbrev": "rd",
        "symbol": "Rd",
        "line1": "red",
        "line2": "e_red",
        "path": "e_red",
        "type": "effect",
        "border": true
      },
      {
        "num": 90,
        "FIELD2": "redeye",
        "abbrev": "ry",
        "symbol": "Ry",
        "line1": "redeye",
        "line2": "e_redeye",
        "path": "e_redeye",
        "type": "effect",
        "border": true
      },
      {
        "num": 91,
        "FIELD2": "replace_color",
        "abbrev": "tc",
        "symbol": "Tc",
        "line1": "replace color",
        "line2": "e_replace_color",
        "path": "e_replace_color",
        "type": "effect",
        "border": true
      },
      {
        "num": 92,
        "FIELD2": "reverse",
        "abbrev": "rv",
        "symbol": "Rv",
        "line1": "reverse",
        "line2": "e_reverse",
        "path": "e_reverse",
        "type": "effect",
        "border": true
      },
      {
        "num": 93,
        "FIELD2": "saturation",
        "abbrev": "sa",
        "symbol": "Sa",
        "line1": "saturation",
        "line2": "e_saturation",
        "path": "e_saturation",
        "type": "effect",
        "border": true
      }
    ],
    [
      {
        "num": 94,
        "FIELD2": "sepia",
        "abbrev": "se",
        "symbol": "Se",
        "line1": "sepia",
        "line2": "e_sepia",
        "path": "e_sepia",
        "type": "effect",
        "border": true
      },
      {
        "num": 95,
        "FIELD2": "screen",
        "abbrev": "sc",
        "symbol": "Sc",
        "line1": "screen",
        "line2": "e_screen",
        "path": "e_screen",
        "type": "effect",
        "border": true
      },
      {
        "num": 96,
        "FIELD2": "shadow",
        "abbrev": "sh",
        "symbol": "Sh",
        "line1": "shadow",
        "line2": "e_shadow",
        "path": "e_shadow",
        "type": "effect",
        "border": true
      },
      {
        "num": 97,
        "FIELD2": "sharpen",
        "abbrev": "sp",
        "symbol": "Sp",
        "line1": "sharpen",
        "line2": "e_sharpen",
        "path": "e_sharpen",
        "type": "effect",
        "border": true
      },
      {
        "num": 98,
        "FIELD2": "shear",
        "abbrev": "sr",
        "symbol": "Sr",
        "line1": "shear",
        "line2": "e_shear",
        "path": "e_shear",
        "type": "effect",
        "border": true
      },
      {
        "num": 99,
        "FIELD2": "simulate_colorblind",
        "abbrev": "si",
        "symbol": "Si",
        "line1": "simulate colorblind",
        "line2": "e_simulate_colorblind",
        "path": "e_simulate_colorblind",
        "type": "effect",
        "border": true
      },
      {
        "num": 100,
        "FIELD2": "style_transfer",
        "abbrev": "st",
        "symbol": "St",
        "line1": "style transfer",
        "line2": "e_style_transfer",
        "path": "e_style_transfer",
        "type": "effect",
        "border": true
      },
      {
        "num": 101,
        "FIELD2": "theme",
        "abbrev": "th",
        "symbol": "Th",
        "line1": "theme",
        "line2": "e_theme",
        "path": "e_theme",
        "type": "effect",
        "border": true
      },
      {
        "num": 102,
        "FIELD2": "tint",
        "abbrev": "ti",
        "symbol": "Ti",
        "line1": "tint",
        "line2": "e_tint",
        "path": "e_tint",
        "type": "effect",
        "border": true
      },
      {
        "num": 103,
        "FIELD2": "transition",
        "abbrev": "tr",
        "symbol": "Tr",
        "line1": "transition",
        "line2": "e_transition",
        "path": "e_transition",
        "type": "effect",
        "border": true
      },
      {
        "num": 104,
        "FIELD2": "trim",
        "abbrev": "tm",
        "symbol": "Tm",
        "line1": "trim",
        "line2": "e_trim",
        "path": "e_trim",
        "type": "effect",
        "border": true
      },
      {
        "num": 105,
        "FIELD2": "unsharp_mask",
        "abbrev": "um",
        "symbol": "Um",
        "line1": "unsharp mask",
        "line2": "e_unsharp_mask",
        "path": "e_unsharp_mask",
        "type": "effect",
        "border": true
      },
      {
        "num": 106,
        "FIELD2": "vectorize",
        "abbrev": "ve",
        "symbol": "Ve",
        "line1": "vectorize",
        "line2": "e_vectorize",
        "path": "e_vectorize",
        "type": "effect",
        "border": true
      },
      {
        "num": 107,
        "FIELD2": "vibrance",
        "abbrev": "vi",
        "symbol": "Vi",
        "line1": "vibrance",
        "line2": "e_vibrance",
        "path": "e_vibrance",
        "type": "effect",
        "border": true
      },
      {
        "num": 108,
        "FIELD2": "viesus_correct",
        "abbrev": "vt",
        "symbol": "Vt",
        "line1": "viesus correct",
        "line2": "e_viesus_correct",
        "path": "e_viesus_correct",
        "type": "effect",
        "border": true
      },
      {
        "num": 109,
        "FIELD2": "vignette",
        "abbrev": "vg",
        "symbol": "Vg",
        "line1": "vignette",
        "line2": "e_vignette",
        "path": "e_vignette",
        "type": "effect",
        "border": true
      },
      {
        "num": 110,
        "FIELD2": "volume",
        "abbrev": "vo",
        "symbol": "Vo",
        "line1": "volume",
        "line2": "e_volume",
        "path": "e_volume",
        "type": "effect",
        "border": true
      }
    ],
    [
      {
        "num": 111,
        "FIELD2": "ar (aspect ratio)",
        "abbrev": "ar",
        "symbol": "Ar",
        "line1": "aspect ratio",
        "line2": "ar_",
        "path": "ar_aspect_ratio",
        "type": "resize",
        "border": true
      },
      {
        "num": 112,
        "FIELD2": "h (height)",
        "abbrev": "h",
        "symbol": "H",
        "line1": "height",
        "line2": "h_",
        "path": "h_height",
        "type": "resize",
        "border": true
      },
      {
        "num": 113,
        "FIELD2": "w (width)",
        "abbrev": "w",
        "symbol": "W",
        "line1": "width",
        "line2": "w_",
        "path": "w_width",
        "type": "resize",
        "border": true
      },
      {
        "num": 114,
        "FIELD2": "fill",
        "abbrev": "fi",
        "symbol": "Fi",
        "line1": "fill",
        "line2": "c_fill",
        "path": "c_fill",
        "type": "resize",
        "border": true
      },
      {
        "num": 115,
        "FIELD2": "fill_pad",
        "abbrev": "fd",
        "symbol": "Fd",
        "line1": "fill pad",
        "line2": "c_fill_pad",
        "path": "c_fill_pad",
        "type": "resize",
        "border": true
      },
      {
        "num": 116,
        "FIELD2": "fit",
        "abbrev": "ft",
        "symbol": "Ft",
        "line1": "fit",
        "line2": "c_fit",
        "path": "c_fit",
        "type": "resize",
        "border": true
      },
      {
        "num": 117,
        "FIELD2": "imagga_crop",
        "abbrev": "ic",
        "symbol": "Ic",
        "line1": "imagga crop",
        "line2": "c_imagga_crop",
        "path": "c_imagga_crop",
        "type": "resize",
        "border": true
      },
      {
        "num": 118,
        "FIELD2": "imagga_scale",
        "abbrev": "is",
        "symbol": "Is",
        "line1": "imagga scale",
        "line2": "c_imagga_scale",
        "path": "c_imagga_scale",
        "type": "resize",
        "border": true
      },
      {
        "num": 119,
        "FIELD2": "lfill",
        "abbrev": "lf",
        "symbol": "Lf",
        "line1": "limit fill",
        "line2": "c_lfill",
        "path": "c_lfill",
        "type": "resize",
        "border": true
      },
      {
        "num": 120,
        "FIELD2": "limit",
        "abbrev": "li",
        "symbol": "Li",
        "line1": "limit fill",
        "line2": "c_limit",
        "path": "c_limit",
        "type": "resize",
        "border": true
      },
      {
        "num": 121,
        "FIELD2": "lpad",
        "abbrev": "lp",
        "symbol": "Lp",
        "line1": "limit pad",
        "line2": "c_lpad",
        "path": "c_lpad",
        "type": "resize",
        "border": true
      },
      {
        "num": 122,
        "FIELD2": "mfit",
        "abbrev": "mf",
        "symbol": "Mf",
        "line1": "minimum fit",
        "line2": "c_mfit",
        "path": "c_mfit",
        "type": "resize",
        "border": true
      },
      {
        "num": 123,
        "FIELD2": "mpad",
        "abbrev": "mp",
        "symbol": "Mp",
        "line1": "minimum pad",
        "line2": "c_mpad",
        "path": "c_mpad",
        "type": "resize",
        "border": true
      },
      {
        "num": 124,
        "FIELD2": "pad",
        "abbrev": "pa",
        "symbol": "Pa",
        "line1": "pad",
        "line2": "c_pad",
        "path": "c_pad",
        "type": "resize",
        "border": true
      },
      {
        "num": 125,
        "FIELD2": "scale",
        "abbrev": "sc",
        "symbol": "Sc",
        "line1": "scale",
        "line2": "c_scale",
        "path": "c_scale",
        "type": "resize",
        "border": true
      },
      {
        "num": 126,
        "FIELD2": "thumb",
        "abbrev": "tb",
        "symbol": "Tb",
        "line1": "thumb nail",
        "line2": "c_thumb",
        "path": "c_thumb",
        "type": "resize",
        "border": true
      }
    ]
  ]

  rowData.forEach(row => {
    console.log("row", row[0].num, row.length)
    table.appendChild(createRow(row))
  })



  //row 1
  // table.appendChild(createRow([{ bo: true }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: true }]))

  // row 2
  // table.appendChild(createRow([{ bo: true }, { bo: true }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }]))

  // row 3
  // table.appendChild(createRow([{ bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: false }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }]))

  // row 4
  // table.appendChild(createRow([{ bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }, { bo: true }]))

  // row 5
  // table.appendChild(createRow([{ bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }]))

  // row 6
  // table.appendChild(createRow([{ bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }]))

  // row 7
  // table.appendChild(createRow([{ bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }]))

  // row 8
  // table.appendChild(createRow([{ bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }, { bo: true, type: 'effect' }]))

  // row 9
  // table.appendChild(createRow([{ bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: true, type: 'resize' }, { bo: false, type: '' }, { bo: false, type: '' }, { bo: false, type: '' }]))



})