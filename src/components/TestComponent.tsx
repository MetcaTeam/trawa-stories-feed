// TestComponent.tsx
import React, { useEffect } from 'react';

const TestComponent: React.FC = () => {
  useEffect(() => {
    console.log('TestComponent useEffect called');
  }, []);

  return <div>TestComponent</div>;
};

export default TestComponent;
