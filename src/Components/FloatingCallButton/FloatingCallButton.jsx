import { useState, useEffect } from 'react';
import { FaPhone, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function FloatingCallButton() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const phoneNumber = '630-913-3893';
    const formattedPhone = phoneNumber.replace(/-/g, ' ');

    // Disable scroll when dialog is open
    useEffect(() => {
        if (isDialogOpen) {
            // Save current scroll position
            const scrollY = window.scrollY;
            // Disable scroll
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
            
            // Store scroll position for restoration
            document.body.setAttribute('data-scroll-y', scrollY.toString());
        } else {
            // Re-enable scroll
            const scrollY = document.body.getAttribute('data-scroll-y');
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY));
            }
            document.body.removeAttribute('data-scroll-y');
        }

        // Cleanup function
        return () => {
            if (isDialogOpen) {
                const scrollY = document.body.getAttribute('data-scroll-y');
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                document.body.style.overflow = '';
                if (scrollY) {
                    window.scrollTo(0, parseInt(scrollY));
                }
                document.body.removeAttribute('data-scroll-y');
            }
        };
    }, [isDialogOpen]);

    const handleBubbleClick = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber.replace(/\s/g, '-')}`;
    };

    return (
        <>
            {/* Chat Bubble */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="fixed bottom-6 left-6 z-50"
            >
                <motion.button
                    onClick={handleBubbleClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative bg-black/30 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl px-5 py-4 pr-8 hover:bg-black/40 transition-all duration-300 group"
                    aria-label="Contact us"
                >
                    <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 relative flex items-center justify-center w-6 h-6">
                            {/* Animated rings on hover */}
                            <span className="absolute inset-0 rounded-full border-2 border-white/40 group-hover:animate-ping opacity-0 group-hover:opacity-100" style={{ animationDuration: '2s', animationIterationCount: 'infinite' }}></span>
                            <span className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:animate-ping opacity-0 group-hover:opacity-100" style={{ animationDuration: '2s', animationDelay: '0.7s', animationIterationCount: 'infinite' }}></span>
                            <FaPhone className="text-white text-lg relative z-10" />
                        </div>
                        <p className="text-white font-light text-sm sm:text-base whitespace-nowrap">
                             Contact us
                        </p>
                    </div>
                    
                    
                </motion.button>
            </motion.div>

            {/* Dialog Modal */}
            <AnimatePresence>
                {isDialogOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center"
                            onClick={handleCloseDialog}
                        >
                            {/* Dialog */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ duration: 0.3 }}
                                className="relative z-[70] w-[90%] max-w-md max-h-[90vh] overflow-y-auto"
                                onClick={(e) => e.stopPropagation()}
                            >
                            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-8">
                                {/* Close button */}
                                <button
                                    onClick={handleCloseDialog}
                                    className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                                    aria-label="Close"
                                >
                                    <FaTimes size={20} />
                                </button>

                                {/* Content */}
                                <div className="text-center space-y-6">
                                    <div className="flex justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                                            <FaPhone className="text-white text-2xl" />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-white text-xl font-semibold mb-2">
                                            Contact Us
                                        </h3>
                                        <p className="text-white/80 font-light text-sm mb-4">
                                            Get in touch with us for more information
                                        </p>
                                    </div>

                                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                        <p className="text-white/60 text-xs font-light mb-1">Phone Number</p>
                                        <p className="text-white text-xl font-light">
                                            {formattedPhone}
                                        </p>
                                    </div>

                                    <motion.a
                                        href={`tel:${phoneNumber.replace(/\s/g, '-')}`}
                                        onClick={handleCall}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="block w-full bg-white text-black py-3 px-6 rounded-full font-medium hover:bg-white/90 transition-all duration-300 flex items-center justify-center space-x-2"
                                    >
                                        <FaPhone />
                                        <span>Call Us</span>
                                    </motion.a>
                                </div>
                            </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default FloatingCallButton;

