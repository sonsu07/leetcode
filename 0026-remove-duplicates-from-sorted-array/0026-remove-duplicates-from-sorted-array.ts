function removeDuplicates(nums: number[]): number {
    nums.splice(0, nums.length, ...(new Set(nums))); // 배열 내용 싹다 잘라내고 중복 제거한 배열로 치환
    return nums.length; // 중복 제거한 배열 길이 리턴
}