const $generateButton = document.getElementById('generate-advice');
const $adviceText = document.getElementById('advice-text');
const $adviceNumber = document.getElementById('advice-number');

async function adviceApi() {
  try {
    $generateButton.disabled = true;

    const response = await fetch('https://api.adviceslip.com/advice', {
      cache: 'no-store',
    });

    if (!response.ok) throw new Error(`API error: ${response.status}`);

    const { id, advice } = (await response.json()).slip;

    $adviceNumber.textContent = `# ${id}`;
    $adviceText.textContent = `"${advice}"`;
  } catch (error) {
    $adviceText.textContent = 'Failed to load advice';
    console.error(error);
  } finally {
    $generateButton.disabled = false;
  }
}

$generateButton.addEventListener('click', adviceApi);
document.addEventListener('DOMContentLoaded', adviceApi);
