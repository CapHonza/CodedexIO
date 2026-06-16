const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];

function mean(viewsArray) {
    let totalViews = 0
    for (let i = 0; i < viewsArray.length; i++ ) {
        totalViews = totalViews + viewsArray[i]
    }
    totalViews = totalViews / viewsArray.length
    return totalViews;
}

function median(viewsArray) {
    let sortedStats = viewsArray.sort((a, b) => a - b);
    let middleIndex = Math.floor(viewsArray.length / 2)
    return sortedStats[middleIndex]
}

console.log("TikTok\nMean" + mean(recentTikTokViews) + "\nMedian" + median(recentTikTokViews) + "\n");
console.log("Instagram\nMean" + mean(recentInstagramViews) + "\nMedian" + median(recentInstagramViews) + "\n");
console.log("Youtube\nMean" + mean(recentYouTubeViews) + "\nMedian" + median(recentYouTubeViews) + "\n");
