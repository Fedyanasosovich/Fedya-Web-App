// lib/dataFetching.js
export async function fetchAllFileUrls(bucketName) {
  try {
    // Server-side fetch (no need for full URL in server components)
    const response = await fetch("sandozomnitrope.com/api/getPresignedUrl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bucketName }),
      // Add cache options for better performance
      next: { revalidate: 604800 }, // Revalidate after a week (604800 seconds)
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const data = await response.json();
    return data.urls; // Array of objects with { key, url }
  } catch (error) {
    console.error("Error fetching file URLs:", error);
    return [];
  }
}
