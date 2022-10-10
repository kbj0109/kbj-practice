/*
면접때 아래 내용을 기준으로 기술 질문을 드리려 합니다.
가능 하시다면 풀어 보시고 코드를 Github에 Push 후 주소를 메일로 회신 부탁 드립니다.

'(', ')', '{', '}', '[' 및 ']' 만 포함하는 문자열이 주어지면 입력 문자열이 유효한지 확인하는 함수를 Javascript로 작성해 주세요.

다음과 같은 경우 입력 문자열이 유효합니다.
열린 괄호와 동일한 유형의 괄호로 닫아야 합니다.
열린 괄호는 올바른 순서로 닫아야 합니다.
유효하면 true, 아니면 false를 리턴합니다.


Example 1:
Input: "()"
Output: true

Example 2:
Input: "()[]{}"
Output: true

Example 3:
Input: "(]"
Output: false

Example 4:
Input: "(({{}}[]))"
Output: true
*/

const hash = { "(": ")", "{": "}", "[": "]" };

const checkString = (s) => {
  if (s.length < 2) return false;

  const pairList = [];

  for (let num = 0; num < s.length; num++) {
    const char = s[num];
    const pair = hash[char];

    if (pair) {
      pairList.push(pair);
      continue;
    }
    if (char !== pairList.pop()) {
      return false;
    }
  }

  return !pairList.length;
};

{
  const result = checkString("(({{}}[]))");
  checkAnswer(result, true);
}

{
  const result = checkString("()");
}
{
  const result = checkString("()[]{}");
}
{
  const result = checkString("(]");
}
