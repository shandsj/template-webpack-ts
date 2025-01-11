// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import jsdoc from 'eslint-plugin-jsdoc';

export default tseslint.config({
        files: ['**/*.ts'],
        ignores: ['webpack/**/*'],
        extends: [
          eslint.configs.recommended,
          tseslint.configs.recommended,
          tseslint.configs.recommendedTypeChecked,
          {
            languageOptions: {
              parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
              },
            },
          },
          tseslint.configs.stylisticTypeChecked,
          tseslint.configs.all,
          jsdoc.configs['flat/recommended-typescript'],
          jsdoc.configs['flat/logical-typescript'],
          jsdoc.configs['flat/contents-typescript'],
          jsdoc.configs['flat/stylistic-typescript']
        ],
        rules: {
            "no-magic-numbers": "off",
            "@typescript-eslint/prefer-readonly-parameter-types": 0,
            "@typescript-eslint/max-params": 0,
        },
        plugins: {
            jsdoc
        },
      }
  );