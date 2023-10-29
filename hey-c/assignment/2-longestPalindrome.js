const longestPalindrome = (s) => {
    if (s.length <= 1) {
        return s;
    }

    let start = 0;
    let maxLength = 1;

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }

        const length = right - left - 1;

        if (length > maxLength) {
            [start, maxLength] = [left + 1, length];
        }
    };

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);
        expandAroundCenter(i, i + 1);
    }

    return s.substring(start, start + maxLength);
};