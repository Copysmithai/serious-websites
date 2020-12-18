import React, { useState } from 'react';
import Button from '../components/Button';
import dfstyles from '../styles/dfstyles';
import { generate } from '../api/ServerAPI';

const styles: {
  [name: string]: React.CSSProperties;
} = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  hwrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    background: 'rgba(0, 0, 0, 0)',
    color: dfstyles.colors.text,
    marginLeft: '8pt',
    width: '72pt',
    height: '24pt',
    borderRadius: '12pt',
    lineHeight: '24pt',
    transition: 'background 0.2s, color 0.2s',
  },
  btnHov: {
    color: dfstyles.colors.background,
    background: dfstyles.colors.text,
  },
  input: {
    padding: '2px 4px',
    borderRadius: '5px',
    border: `1px solid ${dfstyles.colors.text}`,
    transition: 'color 0.2s, background 0.2s, width 0.2s',
  },
};

export const Prompt = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [generatedId, setGeneratedId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [focus, setFocus] = useState<boolean>(false);

  const doSubmit = async () => {
    try {
      setLoading(true);
      const id = await generate(prompt);
      setLoading(false);
      setPrompt('');
      setGeneratedId(id);
    } catch (e) {
      setLoading(false);
      setError(e.toString());
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.hwrapper}>
        <input
          style={{
            ...styles.input,
            color: focus ? dfstyles.colors.text : dfstyles.colors.subtext,
            background: focus
              ? dfstyles.colors.backgroundlighter
              : 'rgba(0, 0, 0, 0)',
            width: focus ? '24em' : '20em',
          }}
          type='text'
          name={prompt}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={'help entrepreneurs sell online.'}
          onKeyDown={(e) => {
            if (e.keyCode === 13) e.preventDefault();
          }}
          onKeyUp={(e) => {
            e.preventDefault();
            if (e.keyCode === 13) doSubmit();
          }}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <Button
          onClick={doSubmit}
          style={styles.btn}
          hoverStyle={styles.btnHov}
        >
          <span>{'GENERATE'}</span>
        </Button>
      </div>

      <p style={{ marginTop: '8px' }}>
        {loading ? 'Generating...' : <span>&nbsp;</span>}
      </p>
      <p style={{ marginTop: '8px' }}>{error || <span>&nbsp;</span>}</p>

      {generatedId ? (
        <a href={`https://serious-websites.club/${generatedId}`}>
          See my site!
        </a>
      ) : null}
    </div>
  );
};
