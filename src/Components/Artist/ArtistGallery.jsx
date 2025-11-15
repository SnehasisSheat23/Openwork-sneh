import React from 'react';

const ArtistGallery = ({ images = [], artistName = '', compact = false }) => {
  // Get first 3 images max
  const displayImages = images.slice(0, 3);
  const mainImage = displayImages[0];
  const sideImages = displayImages.slice(1);

  // Don't render if no images
  if (!images || images.length === 0) {
    return null;
  }

  // Compact mode for the split layout
  if (compact) {
    return (
      <div className="w-full h-full bg-transparent">
        {/* Mobile View - Compact */}
        <div className="lg:hidden space-y-4 h-full overflow-y-auto">
          <div className="w-full h-[250px] overflow-hidden rounded-lg">
            <img
              src={mainImage}
              alt={`${artistName} - Gallery Image 1`}
              className="w-full h-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          {sideImages.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {sideImages.map((img, index) => (
                <div key={index} className="w-full h-[150px] overflow-hidden rounded-lg">
                  <img
                    src={img}
                    alt={`${artistName} - Gallery Image ${index + 2}`}
                    className="w-full h-full rounded-lg object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Desktop View - Compact */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-3 h-full min-h-0">
          {/* Large Main Image */}
          <div className="col-span-2 min-h-0 overflow-hidden">
            <img
              src={mainImage}
              alt={`${artistName} - Gallery Image 1`}
              className="w-full h-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          
          {/* Stacked Side Images */}
          {sideImages.length > 0 && (
            <div className="col-span-1 flex flex-col gap-3 min-h-0">
              {sideImages.map((img, index) => (
                <div key={index} className="flex-1 min-h-0 overflow-hidden">
                  <img
                    src={img}
                    alt={`${artistName} - Gallery Image ${index + 2}`}
                    className="w-full h-full rounded-lg object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Full mode (original layout)
  return (
    <div className="w-full bg-transparent pt-6 sm:pt-8 lg:pt-12 pb-8 sm:pb-12 lg:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile View */}
        <div className="lg:hidden space-y-6">
          <div className="w-full h-[400px] overflow-hidden rounded-lg">
            <img
              src={mainImage}
              alt={`${artistName} - Gallery Image 1`}
              className="w-full h-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          {sideImages.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {sideImages.map((img, index) => (
                <div key={index} className="w-full h-[200px] overflow-hidden rounded-lg">
                  <img
                    src={img}
                    alt={`${artistName} - Gallery Image ${index + 2}`}
                    className="w-full h-full rounded-lg object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Desktop View - 3 images layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4 h-[400px]">
          {/* Large Main Image */}
          <div className="col-span-2 overflow-hidden">
            <img
              src={mainImage}
              alt={`${artistName} - Gallery Image 1`}
              className="w-full h-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          
          {/* Stacked Side Images */}
          {sideImages.length > 0 && (
            <div className="col-span-1 flex flex-col gap-4 min-h-0">
              {sideImages.map((img, index) => (
                <div key={index} className="flex-1 min-h-0 overflow-hidden">
                  <img
                    src={img}
                    alt={`${artistName} - Gallery Image ${index + 2}`}
                    className="w-full h-full rounded-lg object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtistGallery;