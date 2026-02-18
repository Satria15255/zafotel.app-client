import { motion } from "framer-motion"

const variants = {
    fadeUp: {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                ease: "easeOut"
            }
        }
    },
    slideDown: {
        hidden: { opacity: 0, y: -60 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.0,
                ease: "easeOut"
            }
        }
    },
    fadeLeft: {
        hidden: { opacity: 0, x: 40 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    },
    fadeIn: {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { duration: 1.5 }
        }
    }
}

export default function Motion({
    children,
    variant = "fadeUp",
    delay = 0,
    className = "",
    type = "scroll"
}) {

    const isScroll = type === "scroll"

    return (
        <motion.div
            variants={variants[variant]}
            initial="hidden"
            {...(isScroll ?
                {
                    whileInView: "show",
                    viewport: { once: true, amount: 0.2 }
                }
                : {
                    animate: "show"
                }
            )}
            transition={{ delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}