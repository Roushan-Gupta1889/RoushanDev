import Lottie from "lottie-react";

// Minimal "send message" animation data - can be replaced with any LottieFiles JSON
// To use a different animation: download JSON from lottiefiles.com and replace this object
const sendMessageAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 90,
  w: 400,
  h: 400,
  nm: "Send Message",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Paper Plane",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: -45 },
        p: {
          a: 1,
          k: [
            { t: 0, s: [100, 300, 0], to: [50, -50, 0], ti: [-50, 50, 0] },
            { t: 45, s: [200, 200, 0], to: [50, -50, 0], ti: [-50, 50, 0] },
            { t: 90, s: [320, 80, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [100, 100, 100] },
            { t: 45, s: [90, 90, 100] },
            { t: 90, s: [70, 70, 100] }
          ]
        }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              d: 1,
              ks: {
                a: 0,
                k: {
                  i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                  v: [[-30, 0], [30, -15], [30, 15], [-30, 0]],
                  c: true
                }
              }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.4, 0.6, 1, 1] },
              o: { a: 0, k: 100 },
              r: 1
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 }
            }
          ],
          nm: "Plane Body"
        },
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              d: 1,
              ks: {
                a: 0,
                k: {
                  i: [[0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0]],
                  v: [[-30, 0], [0, 0], [0, 20]],
                  c: true
                }
              }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.3, 0.5, 0.9, 1] },
              o: { a: 0, k: 100 },
              r: 1
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 }
            }
          ],
          nm: "Plane Tail"
        }
      ],
      ip: 0,
      op: 90,
      st: 0
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Envelope",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [200, 250, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [120, 80] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 8 }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.25, 0.35, 0.55, 1] },
              o: { a: 0, k: 100 },
              r: 1
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 }
            }
          ],
          nm: "Envelope Body"
        },
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              d: 1,
              ks: {
                a: 0,
                k: {
                  i: [[0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0]],
                  v: [[-60, -40], [0, 10], [60, -40]],
                  c: false
                }
              }
            },
            {
              ty: "st",
              c: { a: 0, k: [0.4, 0.6, 1, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 3 },
              lc: 2,
              lj: 2
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 }
            }
          ],
          nm: "Envelope Flap"
        }
      ],
      ip: 0,
      op: 90,
      st: 0
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Trail 1",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [0] },
            { t: 15, s: [60] },
            { t: 60, s: [0] }
          ]
        },
        r: { a: 0, k: -45 },
        p: {
          a: 1,
          k: [
            { t: 15, s: [100, 300, 0] },
            { t: 90, s: [100, 300, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              s: { a: 0, k: [8, 8] },
              p: { a: 0, k: [0, 0] }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.4, 0.6, 1, 1] },
              o: { a: 0, k: 100 },
              r: 1
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 }
            }
          ],
          nm: "Dot"
        }
      ],
      ip: 0,
      op: 90,
      st: 0
    },
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: "Trail 2",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 10, s: [0] },
            { t: 25, s: [50] },
            { t: 70, s: [0] }
          ]
        },
        r: { a: 0, k: -45 },
        p: {
          a: 1,
          k: [
            { t: 25, s: [130, 270, 0] },
            { t: 90, s: [130, 270, 0] }
          ]
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              s: { a: 0, k: [6, 6] },
              p: { a: 0, k: [0, 0] }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.4, 0.6, 1, 1] },
              o: { a: 0, k: 100 },
              r: 1
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 }
            }
          ],
          nm: "Dot"
        }
      ],
      ip: 0,
      op: 90,
      st: 0
    }
  ],
  markers: []
};

export const ContactAnimation = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[250px] md:min-h-[350px]">
      <div className="relative w-full max-w-[300px] md:max-w-[400px] aspect-square">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
        
        {/* Lottie Animation - replace animationData with any LottieFiles JSON */}
        <Lottie
          animationData={sendMessageAnimation}
          loop={true}
          autoplay={true}
          className="w-full h-full relative z-10"
          style={{ filter: "drop-shadow(0 0 20px hsl(var(--primary) / 0.2))" }}
        />
      </div>
    </div>
  );
};
