import { motion } from "framer-motion"

const variants = {
    fadeUp: {
        hidden: { opacity: 0, y: 0 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
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
}

export default function Motion({
    children,
    variant = "fadeUp",
    delay = 0,
    className = ""
}) {
    return (
        <motion.div
            variants={variants[variant]}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}