@@ .. @@
 import { useDropzone } from 'react-dropzone';
 import { Upload } from 'lucide-react';
 import { useProfilePicture } from '../../../hooks/useProfilePicture';
-import { LoadingSpinner } from '../common';
+import { HourglassLoader } from '../common';
@@ .. @@
         <input {...getInputProps()} />
         {isLoading ? (
-          <LoadingSpinner size="lg" />
+          <HourglassLoader size="lg" />
         ) : (