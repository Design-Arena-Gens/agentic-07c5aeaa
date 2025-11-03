import { notFound } from "next/navigation";
import { Metadata } from "next";
import { trendingListings } from "@/data/listings";
import { ListingDetail } from "@/components/listing-detail";

interface ListingPageProps {
  params: { id: string };
}

export function generateMetadata({ params }: ListingPageProps): Metadata {
  const listing = trendingListings.find((item) => item.id === params.id);
  if (!listing) return { title: "Listing not found" };
  return {
    title: `${listing.title} | EduSwap Somalia`,
    description: listing.description,
    openGraph: {
      title: listing.title,
      description: listing.description,
      tags: listing.tags
    }
  };
}

export default function ListingPage({ params }: ListingPageProps) {
  const listing = trendingListings.find((item) => item.id === params.id);

  if (!listing) {
    notFound();
  }

  return <ListingDetail listing={listing} />;
}
