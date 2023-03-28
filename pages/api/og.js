import { ImageResponse } from '@vercel/og'

export const config = {
    runtime: 'edge',
}

export default async function handler() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    backgroundImage:
                        "linear-gradient(to bottom right, #E0E7FF 25%, #ffffff 50%, #CFFAFE 75%)",
                }}
            >
                <img
                    src={new URL("../../public/frog.png", import.meta.url).toString()}
                    alt="earthflex"
                    width={160}
                />
                <div
                    style={{
                        fontSize: "80px",
                        marginTop: "40px",
                        background:
                            "linear-gradient(to bottom right, #000000 21.66%, #78716c 86.47%)",
                        backgroundClip: "text",
                        color: "transparent",
                        lineHeight: "5rem",
                        letterSpacing: "-0.02em",
                    }}
                >
                    Next Auth & Chakra UI
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 600,
        }
    )
}