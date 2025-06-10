import React from 'react'

interface SectionSentenceProps {
  badge?: string
  title?: string
  description?: string
  badgeStyle?: 'success' | 'error'
}

const PageSentence = ({
  title = '',
  description = '',
  badge = '',
  badgeStyle = 'success',
}: SectionSentenceProps) => {
  return (
    <article style={{ textAlign: 'center', margin: '0 auto', maxWidth: '600px' }}>
      {(title !== '' || badge !== '') && (
        <div style={{ marginBottom: '1rem' }}>
          {badge !== '' && (
            <span
              style={{
                textTransform: 'uppercase',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                color: badgeStyle === 'success' ? '#22c55e' : '#ef4444',
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              {badge}
            </span>
          )}
          {title !== '' && (
            <div
              style={{
                color: '#ffffff',
                fontSize: '1.5rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
              }}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
        </div>
      )}
      {description !== '' && (
        <div
          style={{
            color: '#ffffff', // White text
            fontSize: '1rem',
            lineHeight: 1.6,
          }}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </article>
  )
}

export default PageSentence
