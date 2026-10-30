import React from 'react';

export function LoadingState() {
  return <div className="loading-state" role="status"><span className="spinner" />Loading products…</div>;
}

export function ErrorState({ message }) {
  return <p className="error-state" role="alert">{message}</p>;
}
