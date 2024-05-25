var APP_DATA = {
  "scenes": [
    {
      "id": "0-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.42469678465195315,
        "pitch": 0,
        "fov": 1.4967563682390181
      },
      "linkHotspots": [
        {
          "yaw": 0.32364319701494537,
          "pitch": 0.08136050501012093,
          "rotation": 0,
          "target": "1-living-room"
        },
        {
          "yaw": 2.249864210887157,
          "pitch": 0.050035671206337895,
          "rotation": 6.283185307179586,
          "target": "3-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
      "name": "Living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.10665900984409937,
        "pitch": 0.010340285790945813,
        "fov": 1.4967563682390181
      },
      "linkHotspots": [
        {
          "yaw": -0.26747986204230045,
          "pitch": 0.032490760786650696,
          "rotation": 0,
          "target": "2-balcony"
        },
        {
          "yaw": -2.5843220786916987,
          "pitch": 0.12510211394843118,
          "rotation": 0,
          "target": "0-hall"
        },
        {
          "yaw": -2.8266399856508357,
          "pitch": 0.1267991647675526,
          "rotation": 4.71238898038469,
          "target": "3-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-balcony",
      "name": "Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.538577366551948,
        "pitch": 0.020311710950796424,
        "fov": 1.4967563682390181
      },
      "linkHotspots": [
        {
          "yaw": -3.099841589633378,
          "pitch": 0.06156139161397256,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4967563682390181
      },
      "linkHotspots": [
        {
          "yaw": -0.003661914453957138,
          "pitch": 0.080132950868256,
          "rotation": 0,
          "target": "0-hall"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Sunrise Studio",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
